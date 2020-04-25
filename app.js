// Basic for backend

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// // basic mongo db stuff
// mongoose.connect("mongodb://localhost:27017/DataDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });


// const dataSchema = new mongoose.Schema({// Schema
//     title: String,
//     content: String,
// });


// const Data = mongoose.model("Data", articleSchema); // model
// // Basic ends

app.get("/", function (req, res) {
    res.render("home", {});
    
});





app.listen(3000, function () {
    console.log("Server started on port 3000");
});