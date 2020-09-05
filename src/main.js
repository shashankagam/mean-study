const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // unblocking cors policy
app.use(express.json()); // this will help to read the data coming in body :: TEXT to JSON


const dbadd = require("./add");
const dbauth = require("./authenticate");
const dbupdate = require("./update");
const dbdelete = require("./delete")

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


app.post("/adduser", async (req, res) => {
    try {
      const input = req.body; // before doing this // app.use(express.json());
  
      await dbadd.addRecord(input);

      res.json({ message: "success post" });

    } catch (err) {
      res.json({ message: "failure post" });
    }
});

app.post("/auth-user", async(req, res)=>{
  try {
    const input = req.body; 

    await dbauth.autenticateUser(input);

    res.json({ opr:"true" });

  } catch (err) {
    res.json({ out:"false" });
  }

});

app.post("/update-user", async(req, res)=>{
  try {
    const input = req.body; 

    await dbupdate.updateuser(input);

    res.json({ opr:"true" });

  } catch (err) {
    res.json({ out:"false" });
  }

});

app.post("/delete", async(req, res)=>{
  try {
    const input = req.body; 

    await dbdelete.deletethis(input);

    res.json({ opr:"true" });

  } catch (err) {
    res.json({ out:"false" });
  }

});





  

app.listen(3000);