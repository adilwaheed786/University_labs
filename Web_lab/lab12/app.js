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

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
app.route('/GetData').get(function (req, res){
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("express");
    dbo.collection("details").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
});

app.post('/sign_up', function(req,res){
    var name = req.body.name;
    var email =req.body.email;
    var pass = req.body.password;
    var phone =req.body.phone;
  
    var data = {
        "name": name,
        "email":email,
        "password":pass,
        "phone":phone
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
// app.route('/GetData').get(function(req,res)
// {
//     // var resultArray = [];
//     // var cursor = db.collection('details').find();
//     // console.log(cursor);
//     // cursor.forEach(function(doc, err){
//     //   assert.equal(null, err);
//     //   resultArray.push(doc);
//     // }, function(){
//     //   db.close();
//     //   //I have no index file to render, so I print the result to console
//     //   //Also send back the JSON string bare through the channel
//     //   console.log(resultArray);
//     //   res.send(resultArray);
//     // });
//     var object=db.collection('details').find();
//   //  var obj = JSON.parse(object);
//    console.log(object)
//   //  console.log(obj)
//    res.send(`${object}`);
//    // console.log(object)

// });  
// app.route('/Get').get(function (req, res){
//         db.collection('details', function(err, collection) {
//             collection.find().toArray(function(err, items) {
//                 console.log(items);
//                 res.send(items);
//             });
//         });
    
// });

// app.route('/Get').get(function (req, res){
//     db.collection('details', function(err, collection) {
//         collection.find({},function(err,users){
//             if(err) return res.status(200).send({success:false,msg:"Error"});
//             var UserMap ={};
//             users.forEach(function(users)
//             {
//             UserMap[users._id]=users;
//             });
//             return res.status(200).send({success:true,msg:"data Recieved",users:UserMap}); 
//             });
//     });

// });

app.route('/Get').get(function (req, res){
    db.collection('details').find({},function(err,details)
    {
        console.log(details);
        res.send(details)
    })    
});

// db.collection('detqils').find({}, function (err,details){res.send(details)})

// app.route('/Get').get(function (req, res){
//     db.collection('details', function(err, collection) {
//         collection.find({'_id':o_id}, function(err, cursor){
//              console.log(callback);
//             cursor.toArray(callback);
//             // db.close();
//         });
//     });
// });

// collection.find({},function(err,users){
// if(err) return res.status(200).send({success:false,msg:"Error"});
// var UserMap ={};
// users.forEach(function(users)
// {
// UserMap[users._id]=users;
// });
// return res.status(200).send({success:true,msg:"data Recieved",users:UserMap}); 
// });



app.get('/',function(req,res){
res.set({
    'Access-control-Allow-Origin': '*'
    });
    res.sendFile(path.join(__dirname+'/index.html'));
}).listen(3001)
  
  
console.log("server listening at port 3000");