require("dotenv").config()
const express = require("express")
const cookieParser = require("cookie-parser")
const errorMiddleware = require("./middlewares/error-middleware")
const path = require("path")
const cors = require("cors")

const PORT = 3002
const app = express()

const eventRouter = require("./router/event")
const userRouter = require("./router/index")
const companyRouter = require("./router/company")

app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ limit: "50mb", extended: true }))
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  }),
)
app.use(express.static(path.join(__dirname, "build")))

app.use("/event", eventRouter)
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

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
