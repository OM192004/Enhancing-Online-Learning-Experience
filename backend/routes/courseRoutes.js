const express=require("express");
const router=express.Router();
const {createCourse,editCourse}=require("../controllers/coursecontroller");

router.post("/createcourse",createCourse);
router.put("/editcourse/:courseId", editCourse);


module.exports= router;