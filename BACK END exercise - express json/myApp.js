let express = require("express");
let app = express();
require("dotenv").config();

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  const secret = process.env.MESSAGE_STYLE;
  if (secret === "uppercase") {
    res.json({
      message: "HELLO JSON",
    });
  } else if (secret === "lowercase") {
    res.json({
      message: "hello json",
    });
  } else {
    res.json({
      message: "Hello json",
    });
  }
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;

z;
