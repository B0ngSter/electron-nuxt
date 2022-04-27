const express = require("express");

const app = express();

const port = 5000;

app.get("/me", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.listen(port, () => {
  console.log("Server started");
});
