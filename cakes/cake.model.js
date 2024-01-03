const mongoose = require("mongoose")

const Schema = mongoose.Schema

let cakeSchema = new Schema({
    name:{type:String},
    price:{type:String},
    eggless:{type:Boolean,default:false},
    flavour:String
})

const cakeModel = mongoose.model("cakes",cakeSchema)

module.exports = cakeModel