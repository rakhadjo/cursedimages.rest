const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const images = require("./links.json");

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  const src = images[Math.floor(Math.random() * images.length)];
  res.render("index", { inp: src });
});

app.get("/api", (req, res) => {
  const src = images[Math.floor(Math.random() * images.length)];
  res.json({ image: src });
});

let server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = server
