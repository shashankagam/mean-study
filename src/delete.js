const configration= require("./config.js");
const Promise= require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const mysql = require("mysql");

const deletethis= async(input)=>{
    
 
    const connection= mysql.createConnection(configration.DB_config);
 
    await connection.connectAsync();

    let sql ="SELECT * FROM customer WHERE username=? and password=? ";
    const results=await connection.queryAsync(sql, [input.username, input.password]);
  
    let sql1 ="DELETE FROM customer WHERE username=? and password=?";
    await connection.queryAsync(sql1, [input.username, input.password]);
  
    await connection.endAsync();
  
    if(results.length===0){
         throw new Error("invalid credentials")
    }
 
    
};
module.exports={deletethis};