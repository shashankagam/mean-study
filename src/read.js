const configration= require("./config");
const Promise= require("bluebird");

const mysql= require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


const readRecord= async(user)=>{
   try{
    const Conn= mysql.createConnection(configration.DB_config);

    await Conn.connectAsync();

      let sql= "select * from SALESPEOPLE where Snum='?' ";
      let result= await Conn.queryAsync(sql,[user]);
      console.log(result);

      await Connection.endAsync();
      return result;
    }catch(err){
      console.log(err)
    };

};
// input(2);
module.exports={readRecord};