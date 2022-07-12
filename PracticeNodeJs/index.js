const http = require('http');
const fs = require('fs');
const myServer = http.createServer((req,res)=>
{
    const pageRouting = (fileStatus,FileName)=>
    {
        fs.readFile(FileName,(error,data)=>
        {
            res.writeHead(fileStatus,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
    if(req.url === '/')
    {
        pageRouting(200,"./Pages/Home/index.html");       
    }
    else if(req.url === '/about')
    {
        pageRouting(200,"./Pages/About/index.html"); 
        
    }
    else if(req.url ==='/contact')
    {
        pageRouting(200,'./Pages/Contact/index.html')
    }
   
});
const PORT = 3000;
myServer.listen(PORT,()=>
{
    console.log("server is running");
})