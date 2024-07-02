const express = require("express");
const app = express();
const port = 3300;
const studentRoutes = require("./src/student");

app.use("/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Server đang chạy trên cổng ${port}`);
});
