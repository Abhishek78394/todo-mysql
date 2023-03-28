const express = require( "express"); 
const router = express.Router();
const { logout,login,register, home } = require( "../controller/auth");



router.post ("/register",register,)
router.get ("/",(req,res)=>{res.render("signup")})
router.post ("/signin",login)
router.get ("/signin",(req,res)=>{res.render("signin")})
router.get ("/logout",logout)
router.get ("/home",home)


module.exports = router