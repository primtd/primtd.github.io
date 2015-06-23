var express = require('express');
var path = require('path');
var app = express();

var fs = require('fs');
var stops = JSON.parse(fs.readFileSync('./stops/stops.txt', 'utf8'));



app.get('/config', function (req, res) {
  res.sendFile(path.join(__dirname+'/view/config.html'));
});

app.get('/stops', function(req, res) {
	var found = false;
	for(var i = 0; i < stops.stops.length; i++)
	{
		var id = "MTD" + req.query.id;
		if(stops.stops[i].code === id)
		{
			res.send(stops.stops[i].stop_id);
			found = true;
			break;
		}
	}

	if(found === false)
	{
		res.send("undefined");
	}
});

var server = app.listen(3000, '0.0.0.0', function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('MTD Departures listening at http://%s:%s', host, port);
});
