const express = require("express");
const app = express();
const port = 3300;

app.get("/", (req, res) => {
  res.send("Xin chào!");
});

app.listen(port, () => {
  console.log(`Server đang chạy trên cổng ${port}`);
});
