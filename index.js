let http = require("http");

let server = http.createServer((req,res)=>{
    req.end("Hello World");
});

server.listen(4200, ()=>{
    console.log("Server Running");
})