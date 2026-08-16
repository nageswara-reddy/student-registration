const mongoose = require("mongoose");
const app = require("./app");

mongoose.connect("mongodb://mongodb:27017/studentdb")
    .then(() => {
        console.log("MongoDB Connected");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(err => {
        console.log(err);
    });