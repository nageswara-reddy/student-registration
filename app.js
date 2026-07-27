const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");

const app = express();
mongoose.connect("mongodb://mongodb:27017/studentdb")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const PORT = 3000;

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});