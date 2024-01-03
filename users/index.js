const Express = require("express");

const Usercontroller = require("./user.controller")

const router = Express.Router();

router.post("/create", Usercontroller.create);
router.post("/login", Usercontroller.finduser);
router.get("/listall", Usercontroller.getAllUsers);
router.delete("/delete/:id", Usercontroller.deleteUserById);



module.exports = router;

