const UserModel = require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwtProvider = require('../jwtprovider')

const createUser=async(userData)=>{
    try {
        let {firstName, lastName, email, password} = userData;

        const isUserExist= await UserModel.findOne({email});

        if(isUserExist)
        {
            throw new Error("user with this email already exist ");
        }

        password = await bcrypt.hash(password,8);
        
        const user = await UserModel.create({firstName,lastName,email,password});

        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const findUserById=async(userid)=>{
    try {
        const user = await UserModel.findById(userid)//.populate("addresses");

        if(!user)
        {
            throw new Error("user not found")
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getUserByEmail=async(useremail)=>{
    try {
        const user = await UserModel.findOne({email:useremail})//.populate("addresses");

        if(!user)
        {
            throw new Error("user not found")
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getUserProfileByToken = async(token)=>{
    try {
        const userId = jwtProvider.getUserIdfromtoken(token)

        const user = await findUserById(userId);

        if(!user)
        {
            throw new Error("user not found")
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}


const getAllUsers = async()=>{
    try {
        const users = await UserModel.find();
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {createUser,findUserById,getUserByEmail,getUserProfileByToken,getAllUsers};