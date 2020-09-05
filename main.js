const Promise= require("bluebird");
const mysql= require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const database=async()=>{
  try{
      let Connection=  mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'robince',
        database : 'demo1'
      });

      await Connection.connectAsync();

      let sql= "select * from SALESPEOPLE where Sname='robince' ";
      let result= await Connection.queryAsync(sql);
      console.log(result);

      await Connection.endAsync();
      
    }catch(err){
      console.log(err)
    };

};

database();