const Express = require("express")
const cakeController = require("./cake.cotroller")
const router = Express.Router()

router.post("/create",cakeController.create)
router.get("/listall",cakeController.findAll)



module.exports = router