const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{type:String},
    email:{type:String,required:true},
    password:{type:String},
    verified:{type:Boolean,default:false}
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel