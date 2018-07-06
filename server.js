var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
require("./app/routing/htmlRoutes")(app);
// app.use('/', require('./app/routing/htmlRoutes'));



// var PORT = process.env.PORT || 3306;

app.listen(3000);

// app.get('/', function (req, res) {
//     res.send('Hello World');
// });


// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./app/public/home.html"));
//   });
  

// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "./app/public/survey.html"));
//  });



 

  