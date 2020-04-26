// Basic for backend

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

var { PythonShell } = "python-shell";

const spawn = require("child_process").spawn;
const process = spawn('python3',["main.py"]);
<<<<<<< HEAD
const app = express();
var util = require("util");
port = process.env.PORT || 80
=======
>>>>>>> 82a3ecbb0cdff99c4090609793eb4b1567d87229

var util = require("util");
//const jd = { 'id': 'ChIJCYYAFMV9hYARmJORQa4TX58', 'name': 'Safeway', 'address': '6310 College Ave, Oakland, CA 94618, USA', 'types': ['grocery_or_supermarket', 'food', 'point_of_interest', 'store', 'establishment'], 'coordinates': { 'lat': 37.8504868, 'lng': -122.2522849 }, 'rating': 4.0, 'rating_n': 1048, 'international_phone_number': '+1 510-985-0012', 'populartimes': [{ 'name': 'Monday', 'data': [0, 0, 0, 0, 0, 0, 0, 24, 35, 45, 55, 62, 66, 68, 71, 77, 84, 87, 83, 71, 56, 0, 0, 0] }, { 'name': 'Tuesday', 'data': [0, 0, 0, 0, 0, 0, 0, 21, 30, 40, 50, 59, 65, 69, 73, 76, 78, 77, 73, 64, 52, 0, 0, 0] }, { 'name': 'Wednesday', 'data': [0, 0, 0, 0, 0, 0, 0, 15, 23, 33, 42, 49, 52, 54, 57, 60, 65, 69, 68, 63, 55, 0, 0, 0] }, { 'name': 'Thursday', 'data': [0, 0, 0, 0, 0, 0, 0, 21, 32, 44, 54, 61, 62, 61, 60, 64, 70, 76, 75, 65, 51, 0, 0, 0] }, { 'name': 'Friday', 'data': [0, 0, 0, 0, 0, 0, 0, 22, 34, 46, 56, 62, 64, 66, 72, 83, 93, 96, 88, 74, 60, 0, 0, 0] }, { 'name': 'Saturday', 'data': [0, 0, 0, 0, 0, 0, 0, 19, 33, 51, 71, 86, 93, 95, 94, 95, 95, 91, 82, 70, 57, 0, 0, 0] }, { 'name': 'Sunday', 'data': [0, 0, 0, 0, 0, 0, 0, 16, 26, 41, 59, 76, 89, 97, 100, 99, 98, 94, 86, 74, 58, 0, 0, 0] }], 'time_spent': [25, 25] }; 
//const jd1 = "{'id': 'ChIJCYYAFMV9hYARmJORQa4TX58', 'name': 'Safeway', 'address': '6310 College Ave, Oakland, CA 94618, USA', 'types': ['grocery_or_supermarket', 'food', 'point_of_interest', 'store', 'establishment'], 'coordinates': {'lat': 37.8504868, 'lng': -122.2522849}, 'rating': 4.0, 'rating_n': 1048, 'international_phone_number': '+1 510-985-0012', 'populartimes': [{'name': 'Monday', 'data': [0, 0, 0, 0, 0, 0, 0, 24, 35, 45, 55, 62, 66, 68, 71, 77, 84, 87, 83, 71, 56, 0, 0, 0]}, {'name': 'Tuesday', 'data': [0, 0, 0, 0, 0, 0, 0, 21, 30, 40, 50, 59, 65, 69, 73, 76, 78, 77, 73, 64, 52, 0, 0, 0]}, {'name': 'Wednesday', 'data': [0, 0, 0, 0, 0, 0, 0, 15, 23, 33, 42, 49, 52, 54, 57, 60, 65, 69, 68, 63, 55, 0, 0, 0]}, {'name': 'Thursday', 'data': [0, 0, 0, 0, 0, 0, 0, 21, 32, 44, 54, 61, 62, 61, 60, 64, 70, 76, 75, 65, 51, 0, 0, 0]}, {'name': 'Friday', 'data': [0, 0, 0, 0, 0, 0, 0, 22, 34, 46, 56, 62, 64, 66, 72, 83, 93, 96, 88, 74, 60, 0, 0, 0]}, {'name': 'Saturday', 'data': [0, 0, 0, 0, 0, 0, 0, 19, 33, 51, 71, 86, 93, 95, 94, 95, 95, 91, 82, 70, 57, 0, 0, 0]}, {'name': 'Sunday', 'data': [0, 0, 0, 0, 0, 0, 0, 16, 26, 41, 59, 76, 89, 97, 100, 99, 98, 94, 86, 74, 58, 0, 0, 0]}], 'time_spent': [25, 25]}\n";
var data1

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

util.log('readingin')

process.stdout.on('data',function(chunk){
<<<<<<< HEAD
	console.log(chunk);
    var textChunk = chunk.toString('utf8');// buffer to string
});    

app.get("/populartimesid", function (req, res, next) {


});

app.get("/", function (req, res) {
    res.render("home", {});
    
});


app.listen(port, function () {
    console.log("Server started on port 3000");
=======
    //chunk.toString('utf8')
    var textChunk = chunk.toString('utf8');// buffer to string

    data1 = textChunk;
    //var out =new Buffer(chunk, 'hex');
    console.log(data1);
    
    //util.log(textChunk);
>>>>>>> 82a3ecbb0cdff99c4090609793eb4b1567d87229
});



<<<<<<< HEAD
=======

>>>>>>> 82a3ecbb0cdff99c4090609793eb4b1567d87229
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

<<<<<<< HEAD
// const Data = mongoose.model("Data", articleSchema); // model
// // Basic ends
=======
// ps.PythonShell.run('main.py', options, function(err, results) {
//     data1 = JSON.stringify(results, 0, 2);
// });

// // const Data = mongoose.model("Data", articleSchema); // model
// // // Basic ends

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


app.listen(3000, function () {
    console.log("Server started on port 3000");
});
>>>>>>> 82a3ecbb0cdff99c4090609793eb4b1567d87229
