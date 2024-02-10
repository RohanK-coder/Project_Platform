const express = require("express")
const collection = require("./mongo.cjs")
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
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("fail")
    }
})


app.get("/addUser", async (req, res) => {
    try {
        let email="kancharlavenkat1234@gmail.com";
        let password="12345678";

        // Create a new instance of the Collection model
        const newUser = new collection({ email, password });

        // Save the new user to the database
        const savedUser = await newUser.save();
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(8000,()=>{
    console.log("port connected");
})

