const mod =require("./my.module.js");
const http= require("http");

http.createServer((req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");

    const myrespomse= JSON.stringify(mod.list)
    res.end(myrespomse);
}).listen(5600);