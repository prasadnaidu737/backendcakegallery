const mongoose = require("mongoose")

const url = "mongodb+srv://prasad:1234@cluster0.l5qxjzg.mongodb.net/dxc?retryWrites=true&w=majority"

mongoose.connect(url).then(()=>{
    console.log("connected!!!")
})

