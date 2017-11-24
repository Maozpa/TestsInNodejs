//var express = require('express');
//var fetch = require ("isomorphic-fetch");

//app = express();

//var myData;

//fetch('https://jsonplaceholder.typicode.com/posts/1').then(function(data){
//myData = data;
//}
//)

//app.get('/', (req, res) => res.send(myData))

//app.listen(3000, () => console.log('Example app listening on port 3000!'))

//Creates Txt file
//var fs = require('fs');
//fs.writeFile("./test.txt", "Hey there!", function(err) {
//if(err) {
//return console.log(err);
//}

//console.log("The file was saved!");
//});

//Add text line
//var fs = require('fs');
//fs.appendFile('test.txt', '\r\n'+'42141line test test','utf8', (err) => {
//if (err) throw err;
//console.log('The "data to append" was appended to file!');
//  });

//Delete text line
/*
var fs = require("fs");
fs.readFile("test.txt", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  } else {
    myData = data;
  }
  var linesExceptFirst = data
    .split("\n")
    .slice(1)
    .join("\n");
  fs.writeFile("test.txt", linesExceptFirst, function(err) {
    if (err) {
      return console.log(err);
    }
  });
});
*/
// reads text file + the Message HeyThere!
/*
var fs = require("fs");
fs.appendFile("test.txt", "HeyThere!", "utf8", err => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
  function read(file, callback) {
    fs.readFile("test.txt", "utf8", function(err, data) {
      if (err) {
        console.log(err);
      }
      callback(data);
    });
  }

  var output = read("test.txt", function(data) {
    console.log(data);
  });
});
*/
var express = require("express");
var myParser = require("body-parser");
var app = express();
var fs = require("fs");
fs.readFile("test.txt", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  } else {
    myData = data;
  }
  app.use(express.static("public"));
  app.get("/", (req, res) => res.send(data));
  app.listen(3000, () => console.log("Example app listening on port 3000!"));
});

/*var fs = require("fs");

var data = "";
*/

/*var readStream = fs.createReadStream("test.txt", "utf8");

readStream
  .on("data", function(chunk) {
    data += chunk;
  })
  .on("end", function() {
    console.log(data);
  });
*/
