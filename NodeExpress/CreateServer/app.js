const express = require('express');
const userRouter = require('./Routes/user.router');
const app = express();
app.use("/api/user",userRouter);

app.get("/",(req,res)=>
{
    res.send("Hi this is First Server")
})
app.use((req,res)=>
{
    res.send("<h1> 404 Page not found</h1>");
})
module.exports = app;
