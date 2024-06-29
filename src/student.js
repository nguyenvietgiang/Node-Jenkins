const express = require("express");
const router = express.Router();

// Sample student data
const students = [
  { id: 1, name: "John Doe", age: 20 },
  { id: 2, name: "Jane Doe", age: 22 },
];

// API to get all students
router.get("/", (req, res) => {
  res.json(students);
});

// API to get a student by ID
router.get("/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find((s) => s.id === studentId);

  if (student) {
    res.json(student);
  } else {
    res.status(404).send("Student not found");
  }
});

module.exports = router;
