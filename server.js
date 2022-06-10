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

app.get('/*', (req, res) => {
    try {
        res.sendFile('./build/index.html', {root: __dirname})
        // res.sendFile(path.join((__dirname, 'build', 'index.html')))
    } catch (e) {
        console.log(e)
    }
      })

// comment

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
