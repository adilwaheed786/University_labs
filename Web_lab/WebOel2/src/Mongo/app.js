var express=require("express");
var bodyParser=require("body-parser");
const path = require('path');

// MongoDb Connection here
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/express");
var db = mongoose.connection;
db.on('Error', console.log.bind(console, 'Error in Connection'));
db.once('Open', function(callback)
{
    console.log('Connection Successfull');
});
 // 
var app=express()
  
  
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.post('/sign_up', function(req,res){
    var name = req.body.name;
    var detail =req.body.detail;
    var price =req.body.price;
  
    var data = {
        "name": name,
        "detail":detail,
        "price":price
    }
    // MongoDb Collection code here
db.collection('details').insertOne(data, function(err, collection)
{
    if (err) throw err;
    console.log('Data Inserted Successfully');
})
    
    //
    res.sendFile(path.join(__dirname+'/signup_success.html'));     

})
  
  
// app.get('/',function(req,res){
// res.set({
//     'Access-control-Allow-Origin': '*'
//     });
//     res.sendFile(path.join(__dirname+'/index.html'));
// }).listen(4000)
  
  
console.log("server listening at port 4000");