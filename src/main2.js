const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
const app = express();

const dbadd = require("./add");
const dbread = require("./read");

const conn= require("./config");

app.get("/adduser", async(req, res)=>{
    try{
        const input = req.query;
        await dbadd.addRecord(input);

        
        const json= {result:"done"};
        res.json(json);

    }catch(err){

        const json={error:"arrrrrrr"}
        res.json(json);
        
    }


});

app.listen(3000);