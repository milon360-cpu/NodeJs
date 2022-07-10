const express = require('express');
const app = express();
const router = require('./Routing/routing');
app.use('/api/',router);

app.get('/',(req,res)=>
{
     res.send("This is Home Page");
})
app.use((req,res)=>
{
    res.send(" 404 Server is Not found");
})


module.exports = app;