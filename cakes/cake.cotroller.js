const cakeModel = require("./cake.model")


exports.create = function(req,res){
   const cakeData = new cakeModel(req.body)

   cakeData.save().then((data)=>{
     res.status(200).send({
        message:"Success",
        data:data
     })
   }).catch((err)=>{
    res.status(500).send("error",err)
   })
}


exports.findAll = function(req,res){
    cakeModel
      .find()
      .then((cakes) => {
        if (!cakes) {
          res.staus(404).send("cake not found");
        } else {
          res.send(cakes);
        }
      })
      .catch((err) => {
        res.status(500).send("errr", err);
      });
}