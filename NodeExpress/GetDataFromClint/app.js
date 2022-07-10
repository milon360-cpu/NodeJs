const express = require('express');
const router = require('./RoutingPage/Routing');


const app = express();

app.use(router);
app.get('/',(req,res)=>
{
    res.send("Hello I'm Home Page");
})
app.use((req,res)=>
{
    res.send("404 Page Not Found");
})

module.exports = app;