const express = require("express")
const jwt = require("jsonwebtoken");
const { collection, GC, Project, Technology, Challenge } = require("./mongo.cjs")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const check = await collection.findOne({ email: email, password: password });

        if (check) {
            const mail = { email };
            const accessToken = jwt.sign(mail, 'your-secret-key');
            console.log(accessToken);
            
            res.json({ status: "exist", accessToken: accessToken });
        } else {
            res.json({ status: "notexist" });
        }
    } catch (e) {
        res.json({ status: "fail" });
    }
});

app.post('/api/challenges', async (req, res) => {
  const { email, sector, title, summary, details, impact, image } = req.body;

  try {
    const newChallenge = new Challenge({
      email,
      sector, // Update to sector instead of country
      title,
      summary,
      details,
      impact,
      image,
    });

    const savedChallenge = await newChallenge.save();
    res.json({ status: 'success', challenge: savedChallenge });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', error: 'Failed to save challenge' });
  }
});


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
  
app.get("/api/details/:id", async (req, res) => {
   const challengeId = req.params.id;
  
   try {
     const details = await GC.findById(challengeId);
 
     if (!details) {
       return res.status(404).json({ error: "Challenge not found" });
    }
  
    res.json(details);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });


app.listen(8000,()=>{
    console.log("port connected");
})

