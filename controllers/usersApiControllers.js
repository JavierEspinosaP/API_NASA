const User = require('../models/userModels')



const createUser = async (req, res) => {
    try{
     let newUser = await User.createUsers(req.body);
    res.status(200).json(newUser)   
    }
    catch(error){
    console.log(`ERROR: ${error.stack}`)
    res.status(400).json({ "message": "user not created" });
    }
    
}

const UserControllers = {
    createUser
}

module.exports = UserControllers;