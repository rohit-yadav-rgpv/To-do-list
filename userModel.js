const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        unique: true,
        require: true
    },
    age:{
        type: Number
    },

},{timestamps:true})

// create a Model

const User = new mongoose.model('User', userSchema)
module.exports = User;