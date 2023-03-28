const db = require("../models");
const Users = db.creater;




const  create_user =async(req, res) => {
  try {
    console.log(req)
    console.log(Users)
    console.log(req.body);
    console.log("req.body");
    let users = await Users.findOne({where:{ email: req.body.email} })
    if (users) {
        return res.status(501).json({ message: "user exists" });
    }
            Users.create({  name:req.body.name,
        email:req.body.email,
        password:req.body.password });
        res.status(200).redirect('home')
  } catch (error) {
    console.log(error)
  }
}
  

const  get_user =async(req, res) => {
    try {
        let users = await Users.findAll({});
  res.status(200).send(users);
    } catch (error) {
      console.log(error)
    }
 }
    

 const delete_user =  async( req, res)=>{
  const userId = req.params.id;
  try {
    const user = await Users.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Product not found' });
    }
    await user.destroy();

    res.status(204).redirect("/home")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
 }
 const updateUser_get =async (req, res)=>{
console.log(req.params.id)
const id =  req.params.id
 const user= await  Users.findByPk(id).then((e)=>{
  res.render("updateUSer",{id:id, user:e})
 }).catch(err=>console.log(err))
 }
 
 const update_user =  async( req, res)=>{
  const userId = req.params.id;
  console.log(req.body)
  console.log("req.body")
  const { name, email, password } = req.body;
  try {
    const users = await Users.findByPk(userId);
 
    if (!users) {
      return res.status(404).json({ error: 'Product not found' });
    }
   users.name =  req.body.name
   users.email =  req.body.email
   users.password =  req.body.password
    await users.save( );

    res.redirect("/home")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }



 }

  

  module.exports ={ updateUser_get,  create_user,  get_user  ,  delete_user  ,update_user }