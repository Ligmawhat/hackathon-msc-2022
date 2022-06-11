require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { User, Sequelize } = require('./db/models');
const router = require('./router');
const errorMiddleware = require('./middlewares/error-middleware');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');

const PORT = 3001;
const app = express();
const registerWsEmitter = require('./src/ws/wsEmitter');
const map = new Map();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', router);
app.use(errorMiddleware);

app.get('/*', (req, res) => {
  try {
    res.sendFile('./build/index.html', { root: __dirname });
    // res.sendFile(path.join((__dirname, 'build', 'index.html')))
  } catch (e) {
    console.log(e);
  }
});

// comment
const server = http.createServer(app);
const wss = new WebSocket.Server({ clientTracking: false, noServer: true });

//1
server.on('upgrade', function (request, socket, head) {
  console.log('Parsing session from request...');

  sessionParser(request, {}, () => {
    if (!request.session?.user?.id) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    console.log('Session is parsed!');

    wss.handleUpgrade(request, socket, head, function (ws) {
      wss.emit('connection', ws, request);
    });
  });
});

registerWsEmitter(map);

//2
wss.on('connection', function (ws, request) {
  const userId = request.session.user.id;
  map.set(userId, ws);

  ws.on('close', function () {
    map.delete(userId);
  });
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
