const express=require("express");
const router=express.Router();
const {createBadge}=require("../controllers/badgecontroller");

router.post("/createbadge",createBadge);




module.exports=router;