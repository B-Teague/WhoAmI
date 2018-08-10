// server.js
// where your node app starts

// init project
var express = require('express');
const util = require('util');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  let clientInfo = {};
  clientInfo.ipaddress = request.header('x-forwarded-for').match(/(\d+\.\d+\.\d+\.\d+)/)[1];
  clientInfo.language = request.header('accept-language');
  clientInfo.software = request.header('user-agent').match(/\(([^)]*)/)[1];
  response.send(clientInfo);
});
  

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
