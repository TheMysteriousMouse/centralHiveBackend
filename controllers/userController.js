const userModel = require('../models/userModel');

exports.createUser = async (req,res) =>{
    const user = req.body
    const result = await userModel.addUser(user)
    if(result){
        res.send('User Created!')
    }else{
        res.send('Error Creating User')
    }
}
exports.searchUser = async (req,res) =>{
    const username = req.query.username;
    const result = await userModel.getUserByUsername(username);
    if(result){
        res.send(result)
    }else{
        res.send('That user does not exist')
    }
    
}
exports.getUserStreams = async(req,res) =>{}

exports.deleteUser = async(req,res) =>{
    const username = req.query.username;
    console.log(username)
    const result = await userModel.deleteUserByUsername(username);
    if(result){
        res.send(result)
    }else{
        res.send('That user does not exist')
    }
}



// Add Later
// exports.getUserFollowers = async(req,res) =>{}
// exports.getUserFollowing = async(req,res) =>{}
// exports.follow = async(req,res) =>{}
// exports.unfollow = async(req,res) =>{}
// exports.getAccount = async(req,res) =>{}
