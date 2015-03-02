var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.use('/libs', express.static(__dirname + '/libs'));
app.use(express.static(path.join(__dirname, '/public')));


app.listen(3000);
