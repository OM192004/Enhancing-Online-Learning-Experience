const express=require("express");
const router=express.Router();
const { SignUp ,Login}=require("../controllers/authcontroller")

router.post("/signup",SignUp)
router.get("/login",Login)

module.exports = router;


module.exports = router;