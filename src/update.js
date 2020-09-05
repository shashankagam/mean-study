const configration= require("./config.js");
const Promise= require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const mysql = require("mysql");

const updateuser= async(input)=>{
    
 
    const connection= mysql.createConnection(configration.DB_config);
 
    await connection.connectAsync();
  
    let sql ="SELECT * FROM customer WHERE username=? ";
    const results=await connection.queryAsync(sql, [input.username]);

    let sql1 ="SELECT * FROM customer WHERE email=? ";
    const results1=await connection.queryAsync(sql1, [input.email]);

    let sql2 ="SELECT * FROM customer WHERE mobile=? ";
    const results2=await connection.queryAsync(sql2, [input.mobile]);

    let sql4 ="UPDATE customer SET password =? where username=? and email=? and mobile=?";
    await connection.queryAsync(sql4, [input.password, input.username, input.email, input.mobile]);
  
    await connection.endAsync();
  
    if(results.length===0){
         throw new Error("invalid credentials")
    }
     if(results1.length===0){
        throw new Error("invalid credentials")
    }
    if(results2.length===0){
        throw new Error("invalid credentials")
    }
 
    
 };
module.exports={updateuser};