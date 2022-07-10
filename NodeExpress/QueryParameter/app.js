const express = require('express');
const router = require('./Routing/Routing');
const app = express();

app.use(router);
app.get('/',(req,res)=>
{
    res.send("<h1> This is Home Page</h1>");
})
app.use((req,res)=>
{
    res.send("<h1> 404 Page not Found </h1>");
})

module.exports = app;