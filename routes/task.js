const express = require( "express"); 
const { isAuth } = require("../controller/isAuthnticate");
const router = express.Router();
const { create_task,get_task,delete_task,updateTask_get, createGEt,update_task } = require( "../controller/task");


router.get("/create_task",isAuth,createGEt)
router.post("/create_task",isAuth,create_task)
router.get("/showTask",isAuth,get_task)
router.get("/deleteTask/:id",isAuth,delete_task)
router.get("/updateTask/:id",isAuth,  updateTask_get);
router.post("/updateTask/:id",isAuth,  update_task);



module.exports = router