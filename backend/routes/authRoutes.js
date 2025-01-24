const express=require("express");
const router=express.Router();
const { SignUp }=require("../controllers/authcontroller")

router.post("/signup",SignUp)

// router.post('/login', (req, res) => {
//   res.send('Login successful');
// });

module.exports = router;


module.exports = router;