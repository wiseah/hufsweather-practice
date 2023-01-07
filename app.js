var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'public/html')));
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/photo')));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/html/index-1.html');
});
app.listen(3000, function(){
    console.log('Connecting Server http://localhost:3000');
});