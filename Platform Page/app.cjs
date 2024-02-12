const express = require("express")
const jwt = require("jsonwebtoken");
const { collection, GC } = require("./mongo.cjs")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post("/login",async(req,res)=>{
    const{email,password}=req.body
    try{
        const check=await collection.findOne({email:email,password:password})
        
        if(check){
            const mail = { email };
            const accessToken = jwt.sign(mail, 'your-secret-key');
            console.log(accessToken)
            res.json({ accessToken });
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("fail")
    }
})

app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await collection.findOne({
            $or: [{ username: username }, { email: email }],
        });

        if (existingUser) {
            return res.json("exist");
        }

        const newUser = new collection({ username, email, password });

        const savedUser = await newUser.save();
        res.json("success");
    } catch (error) {
        console.error(error);
        res.status(500).json("error");
    }
});

app.get("/api/details", async (req, res) => {
    try {
      const details = await GC.find();
      res.json(details);
    } catch (error) {
      console.error(error);
      res.status(500).json("error");
    }
  });  


app.listen(8000,()=>{
    console.log("port connected");
})

