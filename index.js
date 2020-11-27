const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World - Theo Caltot");
});

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`App listening at http://0.0.0.0:${process.env.PORT}`);
});