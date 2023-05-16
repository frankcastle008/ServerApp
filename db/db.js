// Store all the users in it ----->
// DAO (Data access object layer --->which interacts with the database)
const { v4: uuidv4 } = require('uuid');

let USERS=[]

const createUser=(userData)=>{
   let existing= USERS.find(ele=>ele.username==userData.username);
   if(existing){
    return false;
   }

   // Generate a Id for the user 
   userData.id=uuidv4();
   USERS.push(userData)

  return  true

}

const getAllUsers=()=>{
    return USERS;
}

const getUserByUsername=(username)=>{

    return USERS.find(ele=>ele.username==username);

}
const getUserDataById=(userId)=>{

    return USERS.find(ele=>ele.id==userId);

}

const updateUser = (id,data)=>{
    
    const filtered = USERS.filter(ele=>ele.id!=id);
    data.id = id;
    filtered.push(data);
    USERS = [...filtered];
    return true;

}

module.exports={
    getAllUsers,
    getUserByUsername,
    createUser,
    getUserDataById,
    updateUser
}