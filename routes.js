const Express=require("express")

const Userroutes = require("./users")
const cakeRoutes = require("./cakes")

const router =Express.Router()

router.use(Userroutes)
router.use("/cakes",cakeRoutes)


module.exports=router