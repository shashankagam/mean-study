const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
const app = express();

const dbadd = require("./add");
const dbread = require("./read");

const conn= require("./config");


// http://localhost:3000/ :: URL :: API :: REST API
// http://localhost:3000/?username=Shweta&id=12
app.get("/", async (req, res) => {
    
    try{
        const connection = mysql.createConnection(conn.DB_config);
  
      await connection.connectAsync();
  
      let sql =
        "INSERT INTO salespeople(Snum, Sname, City,Smob) VALUES (?, ?, ?, ?)";
      await connection.queryAsync(sql, [10,"bobo", "mumbai", "51156"]);
  
      await connection.endAsync();


        const json = { message: "Hurrrayyy, Record Added, Lets Celebrate!!" };
        res.json(json);

    }catch(err){
        const json={err:"check the syntax"};
        res.json(json);
    }
});

    app.get("/adduser", async(req, res)=>{
        try{
            const input= req.query;
            await dbread.addRecord(input);

            
            const json= {result:"done"};
            res.json(json);

        }catch(err){

            const json={error:"arrrrrrr"}
            res.json(json);

        }


});



app.listen(3000);