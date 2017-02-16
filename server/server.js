
var express = require ('express');
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');
var path = require ('path');
var app = express ();

var multer= require('multer')
var upload = multer({dest: 'uploads/'})

 // Connect to Mongoose
 // Mohannad / guys //  please un commient the line below because its not running in my mac device
  // mongoose.connect('monogodb://localhost/test');
 var mongoClient = require('mongodb').MongoClient;
   mongoClient.connect("mongodb://localhost:27017/test", function(error, db) {
        if(!error){
             console.log("We are connected");
        }
        else
           console.dir(error);
    });

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

 var db = mongoose.connection;
 app.get('/signin',function (req,res) {
 	// console.log(req)
 	res.send('test')
 });


app.post('/', upload.any(), function(req, res, next){
  res.send(req.files);
  console.log(req.files[0]["path"]);

})



 app.listen(4000);
 console.log('Running at port 4000');

 app.listen(3000);
 console.log('Running at port 3000');

 module.exports = app;
