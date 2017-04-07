//'require' is node's keyword to load a module
//takes string name of the module as a param
var express = require('express');
//now has acccess to entire express API
//create app
var app= express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
if(req.headers['x-forwarded-proto'] === 'https')
{
  res.redirect('http://'+req.hostname+req.url);
}
else {

  next();
}
});
//adds functionality to
app.use(express.static('public'));
//express.static exposes a folder name to the server
app.listen(PORT,function()
{
  console.log('Server is up and running on Port '+ PORT);
});
