const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();
const port = process.env.PORT || 3000;

const images = require("./links.json");

app.set("views", "./views");
app.set("view engine", "pug");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // every 15 minutes, 
  max: 50                   // limit to 50 requests
});

//  apply to all requests
app.use(limiter);

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
