const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
const app = express();

const dbadd = require("./add");
const dbread = require("./read");

const conn= require("./config");

app.get("/readuser", async(req, res)=>{
    try{
        const input = req.query;
        const result= await dbread.addRecord(input);

        
        const json= {result:"done"};
        res.json(json);

        return result;

    }catch(err){

        const json={error:"arrrrrrr"}
        res.json(json);
        
    }


});

app.listen(3000);