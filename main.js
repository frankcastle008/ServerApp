require('dotenv').config() // it will transfer it to your os 

const app=require("./app");

const port=process.env.PORT // form your os env

app.listen(port,()=>{
    console.log(`Server Running On Port`,port)
})