require("dotenv").config()
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const { User, Sequelize } = require("./db/models")
const userRouter = require("./router/user")
const eventRouter = require("./router/event")
const companyRouter = require("./router/company")
const errorMiddleware = require("./middlewares/error-middleware")
const path = require("path")
const http = require("http")
const WebSocket = require("ws")

const PORT = 3001
const app = express()
const registerWsEmitter = require("./src/ws/wsEmitter")
const myEmitter = require("./src/ee")
const { SEND_MESSAGE_SOCKET } = require("./src/constants/event")
const map = new Map()

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  }),
)
app.use(express.json())
app.use(express.static(path.join(__dirname, "build")))
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser())

app.use("/event", eventRouter)
app.use("/user", userRouter)
app.use("/api", userRouter)
app.use("/company", companyRouter)
app.use(errorMiddleware)

app.get("/*", (req, res) => {
  try {
    res.sendFile("./build/index.html", { root: __dirname })
    // res.sendFile(path.join((__dirname, 'build', 'index.html')))
  } catch (e) {
    console.log(e)
  }
})

// comment
const server = http.createServer(app)
const wss = new WebSocket.Server({ clientTracking: false, noServer: true })

//1
server.on("upgrade", function(request, socket, head) {
  console.log("Session is parsed!")
  wss.handleUpgrade(request, socket, head, function(ws) {
    wss.emit("connection", ws, request)
  })
})

registerWsEmitter(map)

//2
wss.on("connection", function(ws, request) {
  const userId = request?.user?.id
  map.set(userId, ws)

  ws.on("close", function() {
    map.delete(userId)
  })
})

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
