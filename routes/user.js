const express = require( "express"); 
const { isAuth } = require("../controller/isAuthnticate");
const router = express.Router();
const { create_user, get_user, updateUser_get,delete_user, update_user } = require( "../controller/user");



router.post ("/createUser",isAuth,create_user)
router.get ("/createUser",isAuth,(req,res)=>{res.render("createUser")})
router.get ("/get_user",isAuth,get_user)
router.get ("/deleteUser/:id",isAuth,delete_user)

router.post ("/updateUser/:id",isAuth,update_user)
router.get ("/updateUser/:id",isAuth,updateUser_get)



module.exports = router