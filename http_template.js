const http = require("node:http");
const PORT = 3000;
const fs = require("node:fs");

const server = http.createServer((req,res)=>{
    const name = "Abood";
    res.writeHead(200, {"Content-Type":"text/html"});
    // we use the File System to read the html file
    let html = fs.readFileSync("./index.html","utf-8");
    // replace all the variables that wee need using the replace() method
    html = html.replace("{{name}}",name)
    res.end(html);

    // But if the file is long, then we are storing the content in a 
    // temporary buffer which may lead to use unnecessary memory
    // So we can use streams instead!
    // More efficient with streams and pipes
    // fs.createReadStream(__dirname+"./index.html").pipe(res);
    
})

server.listen(PORT,()=>{
    console.log("Server running on port 3000");
})

