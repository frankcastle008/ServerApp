const {getAllUsers, getUserDataById,updateUser}=require("../db/db");


const getUserData=(req,res)=>{

    const users=getAllUsers();

    res.json({
        message:"Success",
        data:users
    })



}


// should be protected api

// Create a  get user profile api ----> so user will pass the id and you have to gets it data
const getUserdata2 = (req,res)=>{
    const id = req.params.id;
    const user = getUserDataById(id);

    res.json({
        message:"Success",
        data:user
    })
}
// Create a A user profile edit api --->
const updateruserdata = (req,res)=>{
    const data = updateUser(req.params.id,req.body);
    res.json({
        message: "success",
        data
    })
}

module.exports={
    getUserData,
    getUserdata2,
    updateruserdata
}