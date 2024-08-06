let httpModule = require("http");

let server = httpModule.createServer((req,res)=>{
    res.end("Hello World");
});

server.listen(4200, ()=>{
    console.log("Server Running");
})