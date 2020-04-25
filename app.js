// Basic for backend

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const spawn = require("child_process").spawn;
const process = spawn('python',["main.py"]);
const app = express();
var util = require("util");


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

util.log('readingin')

process.stdout.on('data',function(chunk){

    var textChunk = chunk.toString('utf8');// buffer to string

    util.log(textChunk);
});


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