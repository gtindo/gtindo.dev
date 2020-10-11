const express = require("express");

const app = express()

app.use("/static", express.static('static'));

app.get("/", (req, res) => {
  let test = 0;
  return res.render("home.ejs");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});