const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");

let usuarios = fs.readFileSync(path.join(__dirname,"../database/usuarios.json","utf-8"));
usuarios = JSON.parse(usuarios);

userController = {
    login: function(req,res){
        res.render("login")
    },
    processLogin: function(req,res){
        let errors = validationResult(req);
        if (!errors.isEmpty()){   
            return res.render("login", {errors: errors.errors})
        } else {
            return res.render("Te logueaste con éxito")
        }
    },
    register: function(req,res){
        res.render("register")
    },
    createUser: function(req,res){
        email: req.body.email,
        password: req.body.password
    }
}
    
module.exports = userController;