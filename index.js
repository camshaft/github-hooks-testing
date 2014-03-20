/**
 * Module dependencies
 */

var stack = require('simple-stack-common');

var app = module.exports = stack();

app.post('/', function(req, res) {
  console.log(req.headers);
  console.log(req.body);
  res.send(200);
});
