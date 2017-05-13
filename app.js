//Execute Db Connection (Moved the DB Connection code to seperate file(dbConnect.js) in folder(config))
require( './config/dbConnect' );

//Import Express Library in this application
var express = require('express');
//Import Mongodb Library in this application
var mongodb = require('mongodb');
//Import Mongoose Library in this application (Used to easy communicate with MongoDB)
var mongoose = require('mongoose');


//create app as express instance
var app = express();

//First Method, We have already seen in previous apps
//Its a GET Method , which executes when app is listening at address "/" after app server address http://0.0.0.0:8080/
app.get('/', function (req, res) {
  res.send('Hello world');
});

//Second Method, 
//Its a GET Method , which executes when app is listening at address "/AboutUs" after app server address http://0.0.0.0:8080/AboutUs
app.get('/AboutUs', function (req, res) {
  res.send('This is my Node JS App');
});


//Third Method, 
//Its a GET Method , which executes when app is listening at address "/Services" after app server address http://0.0.0.0:8080/Services
app.get('/Services', function (req, res) {
  res.send('I Develop Node JS Apps');
});


//Fourth Method,
//Its a GET Method , which executes when app is listening at address "/ContactUs" after app server address http://0.0.0.0:8080/ContactUs
app.get('/ContactUs', function (req, res) {
  res.send('You Can contact me at abcd@xyz.com');
});




// Create server at given address "0.0.0.0" and posrt "8080"

var server = app.listen(8080, "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port)
});


