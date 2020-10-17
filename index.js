const express = require("express");
const fs = require("fs");

const app = express()

app.use("/static", express.static('static'));

app.get("/resume", (req, res) => {
  return res.render("resume.ejs");
});

app.get("/articles", (req, res) => {
  let articles = JSON.parse(fs.readFileSync("articles.json").toString());
  return res.render("articles.ejs", {articles});
})

app.get("/", (req, res) => {
  return res.render("home.ejs");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});