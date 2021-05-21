const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 3000;

var obj;

fetch(process.env.rsc)
  .then((res) => res.json())
  .then((data) => (obj = data))
  .catch((err) => {console.log(err)});

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  const src = obj[Math.floor(Math.random() * obj.length)];
  res.render("index", { inp: src });
});

app.get("/json", (req, res) => {
  const src = obj[Math.floor(Math.random() * obj.length)];
  res.json({ image: src });
});

let server = app.listen(port, () => {
  console.log(`Cursed Images API listening at http://localhost:${port}`);
});

module.exports = server;
