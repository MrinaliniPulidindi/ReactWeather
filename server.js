//'require' is node's keyword to load a module
//takes string name of the module as a param
var express = require('express');
//now has acccess to entire express API
//create app
var app= express();
//adds functionality to
app.use(express.static('public'));
//express.static exposes a folder name to the server
app.listen(3000,function()
{
  console.log('Server is up and running on Port 3000');
});
