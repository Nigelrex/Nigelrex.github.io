const config = require("./config.json");
var express = require("express");
var app = express();
path = require("path");

var errorPg = path.join(__dirname, "./public/pages/404.html");
var HPg = path.join(__dirname, "./index.html");


app.use(express.static(path.join(__dirname, './')));
// app.get("/", function (req, res) {
//   res.sendFile(HPg);
// });
app.get("*", function (req, res) {
  res.sendFile(errorPg);
});
app.listen(config.webserver.port);
console.log("\n");
console.log("Github Actions Success")
console.log(
  `Webserver running at http://${config.webserver.host}:${config.webserver.port}\n`
);
