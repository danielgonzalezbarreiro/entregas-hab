const express = require("express");
const app = express();

app.use((req, res, next) => {
  req.now = new Date();

  if (req.now.getHours() > 12) {
    res.status(404).send("Not found");
  } else {
    next();
  }
})

app.get('/', (req, res) => {
  res.end("Bos dias");
});

app.listen(3000, () => {
  console.log("Web server start");
});