const bcrypt = require('bcrypt');
const {getUserByUsername}=require("../db/db");
const  jwt = require('jsonwebtoken');


// its a very special middleware ,it takes four arguments 
const errorMiddleware=(err,req,res,next)=>{
  //  console.log(err);
    // We will send error from here
    res.json({
        message:"Failed",
        error:err.toString()
    })

}

const encryptPassword=(req,res,next)=>{
    const saltRounds = 10;

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        console.log(hash);
        req.body.password=hash
        next();
    });


}

const checkPassword=(req,res,next)=>{
    const user=getUserByUsername(req.body.username);
    if(user){
        bcrypt.compare(req.body.password, user.password, function(err, result) {
            if(!result){
                next(new Error("Please enter correct username or password"))
            }else{
                next();
            }
        
        });

    }else{
        next(new Error("User Not found"))
    }
  


}

const checkAuthorization=(req,res,next)=>{
  // We will be checking for the the jwt header
    const authorizationToken=req.headers.authorization;
    if(authorizationToken){

        // We will check the token here ,that if it is the valid token ornot
          try {
         jwt.verify(authorizationToken, process.env.JWTKEY);

            next();
          } catch(err) {
          
            res.status(401).json({
                status:"Failed",
                message:"Token Malformed..."
            })
            
          }
    

    }else{
        res.status(401).json({
            status:"Failed",
            message:"Authorization Required"
        })
    }




}

module.exports={
    errorMiddleware,
    encryptPassword,
    checkPassword,
    checkAuthorization
}