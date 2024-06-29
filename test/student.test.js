const request = require("supertest");
const express = require("express");
const studentRoutes = require("../src/student");

const app = express();
app.use("/students", studentRoutes);

describe("Student API", () => {
  it("should return 404 for a non-existing student", (done) => {
    request(app).get("/students/999").expect(404, done);
  });
});
