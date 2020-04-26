// Basic for backend

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

var { PythonShell } = "python-shell";

const spawn = require("child_process").spawn;
const processSpawn = spawn('python3',["main.py"]);
var util = require("util");

var util = require("util");
var data1

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

util.log('readingin')

processSpawn.stdout.on('data',function(chunk){
    data1 = chunk.toString('utf8');// buffer to string
});    


app.get("/", function (req, res) {     
    // convert data1 to { "id": "ChIJCYYAFMV9hYARmJORQa4TX58", "name": "Safeway" } format     
    //Data = JSON.stringify(data1)     
    Data = data1.replace(/'/g,'"');     
    res.render("home", {dataejs: Data});  
});

app.get("/time", function (req, res) {
    var time = {
      time: "30",
    };
    Time = JSON.stringify(time);
    res.render("time", {timeejs: Time});
})


app.listen(process.env.PORT|| 8888, function() {
    console.log("Server started on port 3000");
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

// var ps = require("python-shell");
// var options = {
//   mode: "json",
//   pythonOptions: ["-u"], // get print results in real-time
//   scriptPath: "."
// };

// const Data = mongoose.model("Data", articleSchema); // model
// // Basic ends

// ps.PythonShell.run('main.py', options, function(err, results) {
//     data1 = JSON.stringify(results, 0, 2);
// });

// // const Data = mongoose.model("Data", articleSchema); // model
// // // Basic ends
