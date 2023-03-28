const db = require("../models");
const bcrypt = require('bcryptjs');
const Task = db.task;
const Users = db.creater;
const jwt = require("jsonwebtoken")
 

const createGEt =  async (req,res)=>{
  try {
    let users = await Users.findAll({});
res.status(200).render("task",{users:users})
} catch (error) {
  console.log(error)
}
}

const  create_task =async(req, res) => {
  try {
    title = req.body.title,
    user_id= req.body.user
    console.log(req.body)
  const task = await Task.create({title, user_id});
        res.status(200).redirect("showTask")
    console.log(task)
  } catch (error) {
    console.log(error)
  }
}
  


const get_task = async(req, res) => {
try {
const data = await Task.findAll({
    include:[
        {
            model:Users
        }
    ]
}).then(async(e)=>{
    console.log(e)
  const task=  e.map((data)=>{
        return data  
    })
    // console.log(task)

    res.status(200).render("showTask" ,{task:task})
})
} catch (error) {
    console.log(error)
}
}
  
 const delete_task = async(req, res) => {
  const userId = req.params.id;
  try {
    const task = await Task.findByPk(userId);
    if (!task) {
      return res.status(404).json({ error: 'Product not found' });
    }
    await task.destroy();
    res.status(204).redirect("/showTask")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
  }

const update_task = async(req,res)=>{
  try {
   
  const taskId = req.params.id
  const { title ,  user_id  } = req.body;
  const tasks = await Task.findByPk(taskId);
  if (!tasks) {
    return res.status(404).json({ error: 'task not found' });
  }
  tasks.title  = req.body.title
  tasks.user_id  = req.body.user_id

  await tasks.save()
  res.redirect('/showTask')
} catch (error) {
  console.log("object")
}
}

const updateTask_get = async( req,res) =>{
  const id = req.params.id;
  const task = await Task.findByPk(id)
  const userId  = task.user_id
  let user = await Users.findByPk(userId)
  res.render("updateTask" ,{id:id,user:user ,task:task})
}

module.exports ={ updateTask_get,  create_task,  get_task  , createGEt, delete_task  ,update_task }

