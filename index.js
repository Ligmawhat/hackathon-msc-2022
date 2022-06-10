require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { User, Sequelize } = require("./db/models");
const router = require("./router");
const errorMiddleware = require("./middlewares/error-middleware");
const path = require('path')

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.static(path.join(__dirname, 'build')))

app.use("/api", router);
app.use(errorMiddleware);
const start = async () => {
  try {
      app.get('/*', (req, res) => {
          // res.sendFile(path.join((__dirname, 'build', 'index.html')))
          res.sendFile('./build/index.html', {root: __dirname})
      })
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
