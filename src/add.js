const configration= require("./config.js");
const Promise= require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const mysql = require("mysql");

const addRecord= async(input)=>{
   try{

    const connection= mysql.createConnection(configration.DB_config);

    await connection.connectAsync();
 
    let sql ="INSERT INTO customer (username, password, email, mobile ) VALUES (?, ?, ?, ?)";
    await connection.queryAsync(sql, [input.username, input.password, input.email, input.mobile]);
 
    await connection.endAsync();
 
     return;

   }catch(err){
    console.log(err.message)
   }
};

module.exports={addRecord};

