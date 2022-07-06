const http = require('http');

const creatingServer = http.createServer((req,res)=>
{
    res.writeHead(303,{'Content-Type':'text/html'});
    res.write("<h1>Hello Bangladesh</h1>");
    res.end();
})
const port  = 3000;
creatingServer.listen(port,()=>
{
    console.log(" Server is Running");
})