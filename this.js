var express = require('express')
var app = express();
const port = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")))

//app.get('/', function (req, res) {
//  res.status(200);
//  res.sendFile(path.join(__dirname, "index.html"));
//});
//
//app.get('/favicon.ico', function (req, res) {
//  res.status(200);
//  res.sendFile(path.join(__dirname, "favicon.ico"));
//});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
