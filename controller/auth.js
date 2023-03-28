const db = require("../models");
const bcrypt = require('bcryptjs');
const User = db.user;
const TaskUSer = db.creater
const jwt = require("jsonwebtoken")
const Cookie = require('cookie-universal')
var session = require('express-session')


const register = async (req, res) => {
    try {
        console.log(req.body.email);
        let user = await User.findOne({ where: { email: req.body.email } })
        if (user) {
            return res.status(501).json({ message: "user exists" });
        }

        const password = req.body.password
        async function hashPassword() {
            const hash = await bcrypt.hash(password, 10);
            return hash;
        }

        var hashePassword = hashPassword().then(function (hashedPassword) {
            console.log(hashedPassword);

            User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            });
            res.status(200).redirect("signin")

        })
    } catch (error) {
        console.log(error)
    }
}



const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ where: { email } }).then((user) => {
            let users = user.dataValues
            return users
        })
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        console.log(user)

        const hash = user.password

        bcrypt.compare(password, hash, function (err, result) {
            if (err) {
                console.error(err);
            }
            if (result === false) {
                console.log('Password is incorrect!');
            }

            
            const token = jwt.sign({ id: user.id }, "secretkey");
            res.cookie("accessToken", token, {
                maxAge: 9990900000,
                httpOnly: true,
            })
                .status(200)
                .redirect('home')
        });
    } catch (error) {
        console.log(error)
    }
}

const logout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).redirect('signin')

}
const home = async (req, res) => {
    try {
        await TaskUSer.findAll({}).then((e) => {
            res.status(200).render("showuser", { users: e })
        }).catch(err => console.log(err))
    } catch (error) {
        console.log(error)
    }
}



module.exports = { register, login, home, logout }