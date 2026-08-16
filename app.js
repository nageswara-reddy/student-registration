const express = require("express");
const Student = require("./models/Student");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/register", async (req, res) => {
    try {
        const student = new Student({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            course: req.body.course
        });

        await student.save();

        res.send("Student Registered Successfully");

    } catch (error) {
        console.log(error);
        res.send("Error saving student");
    }
});

module.exports = app;