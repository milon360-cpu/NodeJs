const express = require('express');
const app = express();
const router = require('./Routing/routing');
app.use(router);
app.get('/',(req,res)=>
{
    res.send("This is Home Page");
})
app.use((req,res)=>
{
    res.send(" 404 Page not Found");
})
module.exports = app;