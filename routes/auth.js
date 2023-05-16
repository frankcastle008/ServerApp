const express=require("express");
const router=express.Router();
const {signup,login}=require("../controllers/authcontroller");
const {encryptPassword,checkPassword}=require("../middlewares/middleware");

router.post("/signup",encryptPassword,signup)
router.post("/signin",checkPassword,login)



module.exports=router