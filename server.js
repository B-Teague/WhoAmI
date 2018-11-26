const express = require('express');
const app = express();
const whoamiRoute = require(__dirname + '/routes/whoamiRoute');
const indexRoute = require(__dirname + '/routes/index');
const notFoundHandler = require(__dirname + '/middleware/notFoundHandler');
const errorHandler = require(__dirname + '/middleware/errorHandler');

app.use(express.static('public'));
app.use("/api/whoami", whoamiRoute);
app.use('/', indexRoute);
app.use(notFoundHandler);
app.use(errorHandler);

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});