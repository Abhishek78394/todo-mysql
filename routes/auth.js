const express = require( "express"); 
const router = express.Router();
const { logout,login,register, home } = require( "../controller/auth");
const { isAuth } = require("../controller/isAuthnticate");



router.post ("/register",register,)
router.get ("/",(req,res)=>{res.render("signup")})
router.post ("/signin",login)
router.get ("/signin",(req,res)=>{res.render("signin")})
router.get ("/logout",isAuth,logout)
router.get ("/home",isAuth,home)


module.exports = router