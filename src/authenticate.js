const configration= require("./config.js");
const Promise= require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const mysql = require("mysql");

const autenticateUser= async(input)=>{
    
 
     const connection= mysql.createConnection(configration.DB_config);
 
     await connection.connectAsync();
  
     let sql ="SELECT * FROM customer WHERE username=? AND password=?";
     const results=await connection.queryAsync(sql, [input.username, input.password]);
  
     await connection.endAsync();
  
     if(results.length===0){
         throw new Error("invalid credentials")
     }
 
    
 };
module.exports={autenticateUser};