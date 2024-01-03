const userModel = require("./user.model");
const JWT = require("jsonwebtoken")
exports.create = function (req, res) {
  let userData = new userModel(req.body);

  userData
    .save()
    .then((data) => {
      console.log("data coming", data); // Log the saved data for debugging
      res.send({
        message: "Data inserted",
        data: data, // You might want to send the saved data back to the client
      });
    })
    .catch((err) => {
      console.error("Error while inserting data", err);
      res.status(500).send("Error while inserting data");
    });
};


exports.getAllUsers = function (req, res) {
  userModel
    .find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.error("Error fetching users:", err);
      res.status(500).send("Error fetching users");
    });
};

exports.deleteUserById = function(req,res){
   const  userId = req.params.id
   console.log(userId)
       userModel.findByIdAndDelete(userId).then(deleteuser=>{
        if(!deleteuser){
          res.status(404).send("user not found")
        }
        res
          .status(200)
          .send({
            message: "user deleted successfully",
            deleteduser: deleteuser,
          });
       }).catch((err)=>{
        res.status(500).send("error deleting user")
       })
}


exports.finduser = function(req,res){

  const projection = {
    email:1,
    name:1,
    role:1
  }

   userModel.findOne(req.body,projection).then((user)=>{
    if(user){
        const token = JWT.sign({email:user.email},"secret123")
        res.set("auth",token)
        res.send({data:user})
    }else{
      res.status(204).send("user not found")
    }
   }).catch((err)=>{
    res.status(500).send("err",err)
   })
   
}