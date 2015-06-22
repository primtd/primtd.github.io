var express = require('express');
var path = require('path');
var app = express();

app.get('/config', function (req, res) {
  res.sendFile(path.join(__dirname+'/view/config.html'));
});

var server = app.listen(3000, '0.0.0.0', function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('MTD Departures listening at http://%s:%s', host, port);
});
