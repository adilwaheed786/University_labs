
// Task 1 Greeting
// var express=require('express');
// var app=express();
// app.get('/',function(req,res)
// {
// res.send('<h1>Greeting</h1>');
// });
// var server=app.listen(3000,function() {});

// Task 2
// var express = require('express');
// var app = express();
// app.route('/Node').get(function(req,res)
// {
//     res.send("<h1>Tutorial on Node</h1>");
// });
// app.route('/Angular').get(function(req,res)
// {
//     res.send("<h1>Tutorial on Angular</h1>");
// });
// app.get('/Get',function(req,res){
//     res.send('<h1>Welcome Adil Waheed</h1>');
// });
// app.get('/',function(req,res){
//     res.send('<h1>Welcome to BSE 4A</h1>');
// });
// var server=app.listen(3000,function() {});

// Task3
const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Route to Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.post('/', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  let age=req.body.age;
  res.send(`Username: ${username} Password: ${password} Age:${age}`);
});
const port = 3000 // Port we will listen on
// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));