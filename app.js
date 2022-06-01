const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.route");

app.use(cors());
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", usersRouter);

// home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// route not found error
app.use((req, res, next) => {
  res.status(404).json({ message: "route not found" });
});

// server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: "something broke" });
});

module.exports = app;
