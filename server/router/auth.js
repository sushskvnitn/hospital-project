const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());
const bcrypt = require("bcrypt");
const {Doctor , Gallery  }  = require("../schema/userschema");

router.get("/doctors", (req, res) => {
    try {
        Doctor.find({}, (err, doctors) => {
            if (err) {
                throw err;
            }
            res.send(doctors);
        });
    } catch (err) {
        console.log(err);
    } 
});

router.get("/signup", (req, res) => {
  res.send("hello world from signup");
});

router.post("/register", async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  if (!name || !email || !password || !cpassword) {
    res.status(400).json({ msg: "Please fill all the fields" });
  }
  try {
    const userexist = await Doctor.findOne({ email: email });
    if (userexist) {
      return res.status(400).json({ msg: "User already exists" });
    } else if (password !== cpassword) {
      return res.status(400).json({ msg: "Password does not match" });
    } else {
      const newUser = new Doctor({
             name: name,
             email: email,
              password: password,
              cpassword: cpassword,
      });
      await newUser.save();
      res.status(201).json({ msg: "User created successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post('/login',async (req, res) => {
  try {
const{ name,email,password}= req.body;
if ( !name ||!email  || !password) {
    return res
      .status(422)
      .json({ error: "make sure all fields are filled up " });
  }
      //here User is from user schema 
    const userlogin= await Doctor.findOne({ email: email });
    // console.log(req.body);
        //password is from the user and userlogin.password() is from database     
    if(userlogin){
        const isMatch = await bcrypt.compare(password, userlogin.password)
        if(!isMatch) {
        res.status(400).json({ error: "invalid credentials" });
    }else{
         res.status(201).json({ success: "user login  successfully " });
    }
    }else{
        res.status(400).json({ error: "invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
})
router.post('/addphoto', async(req, res) => {
  console.log(req.body);
});

router.get('/gallery',async (req, res) => {
  try {
    const gallery = await Gallery.find();
    res.status(201).json({ gallery: gallery });
  } catch (error) {
    console.log(error);
  }
})




module.exports = router;