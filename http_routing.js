const http = require("node:http");
const PORT = 3000;
const server = http.createServer((req,res)=>{
    //req.method gives us access to the HTTP method
    // GET POST PUT DELETE 
    if(req.url === "/"){
        res.writeHead(200,{"Content-Type": "text/plain"});
        res.end("Home Page");
    }
    else if(req.url === "/about"){
        res.writeHead(200,{"Content-Type": "text/plain"});
        res.end("About Page");
    }
    else if(req.url === "/api"){
        res.writeHead(200,{"Content-Type": "application/json"});
        res.end(JSON.stringify({
            firsname: "Bruce",
            lastname : "Wayne"
        }))
    }
    else{
        res.writeHead(404) ;
        res.end("Page not found!");

    }

})

server.listen(PORT,()=>{
    console.log("Server running on port 3000");
})

