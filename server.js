var express = require('express');
var app = express();
var path=require("path");
var fs=require("fs");


//server configuration
app.use(express.static(path.join(__dirname,'febricams')));

 app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/index.html'));
});
 

app.get('/aboutus', function (req, res) {
  res.sendFile(path.join(___dirname + '/aboutus.html'));
});

app.get('/products', function (req, res) {

  res.sendFile(path.join(___dirname + '/products.html'));


});

 
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8081", host, port)
})
