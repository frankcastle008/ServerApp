const express=require("express");
const router=express.Router();
const {getUserData,getUserdata2,updateruserdata}=require("../controllers/usercontroller");

const {checkAuthorization}=require("../middlewares/middleware");

// This is a routes level middleware  and all the routes defined in this file
// will be   protected by this middleware
router.use(checkAuthorization)
router.get("/",getUserData)

// router.post("/id",getUserdata2);
router.get("/:id",getUserdata2);
router.put("/:id",updateruserdata);


module.exports=router