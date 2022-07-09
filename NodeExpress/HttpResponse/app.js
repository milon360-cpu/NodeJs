const express = require('express');
const router = require('./Routing/routing');
const app = express();

app.use(router);
app.get('/',(req,res)=>
{
  res.send("<h1>Hello I'm Home Page</h1>");
})
app.use((req,res)=>
{
  res.send("<h1> 404 Page not found</h1>");

})
module.exports = app;