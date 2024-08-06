let httpModule = require("http");

let server = httpModule.createServer((req,res)=>{
    res.end("Hello World");
});

server.listen(4100, ()=>{
    console.log("Server Running");
})