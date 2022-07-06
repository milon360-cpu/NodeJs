const http = require('http');

const myServer = http.createServer((req,res)=>
{
    res.end("This is my first and Second  Server");
})
const port = 3000;
const localHost = "127.0.0.1";
myServer.listen(port,()=>
{
    console.log("Server is Running");
})