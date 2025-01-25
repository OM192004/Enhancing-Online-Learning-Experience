const express=require("express");
const router=express.Router();
const {createCourse,editCourse,getAllCourses,getCourseQuestions}=require("../controllers/coursecontroller");

router.post("/createcourse",createCourse);
router.put("/editcourse/:courseId", editCourse);
router.get("/getallcourses",getAllCourses);
router.get("/questions/:courseId",getCourseQuestions);



module.exports= router;