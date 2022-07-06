const http = require('http');
const fs = require('fs');
const port = 3000;

const makeServer = http.createServer((req,res)=>
{
    const routingProject =(statusCode,FileName)=>
    {
        fs.readFile(FileName,'utf-8' ,(error,data)=>
        {
           res.writeHead(statusCode, {"Content-Type":"text/html"})
           res.write(data)
           res.end();
        })
    }
    if(req.url === '/')
    {
        routingProject(200,'./Pages/home.html');
    }
    else if(req.url === '/about')
    {
        routingProject(200,'./Pages/about.html');
    }
    else if(req.url === '/contact')
    {
        routingProject(200,'./Pages/contact.html');
    }

   
})
makeServer.listen(port,()=>
{
  console.log("server is Running");
})