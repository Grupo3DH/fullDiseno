const db = require("../database/models/index")
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs"); // hashea la password
const { validationResult } = require("express-validator");




userController = {
    perfil: function(req,res){
        db.User.findByPk(req.session.user.id)
        .then(function (user){
            return res.render("perfil", {user})
        })
    },
    update: function(req,res){
        db.User.findByPk(req.session.user.id)
        .then(function (user){
            db.User.update({
                name: req.body.nombre,
                email: req.body.email,
                password: bcrypt.hashSync(toString(req.body.password), 12),
                admin: 0,
                avatar: req.file ? req.file.filename : req.session.user.avatar 
            },{
                where: {
                    id: req.params.id,
                }
            })
            .then(function(){
                return res.redirect("/perfil")
            })
        })
    },
    register: function (req, res) {
        res.render("register")
    },
    createUser: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
             db.User.create({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(toString(req.body.password), 12),
                admin: 0,
                avatar: req.file ? req.file.filename : req.session.user.avatar 
                }).then(function(users){
                    res.redirect("login")
                })
            } else {
                return res.render("register", { errors: errors.mapped(), old: req.body })
            }
        
    },

    login: function (req, res) {
        res.render("login")
    },

    processLogin: function (req, res) {
        db.User.findOne({
            where: {
                email: req.body.email
            }   
        }).then(function(user){
            if(user && bcrypt.compareSync(req.body.password, user.password)){
                req.session.user = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    admin: user.admin,
                    avatar: user.avatar
                }
            if(req.body.recordarme != undefined){ 
                res.cookie("recordarme", req.session.user.id, { maxAge: 900000});
            }
            return res.redirect('/')
        
            }
        
        }).catch((error)=>console.log(error))
    },
 
    logout: function(req,res){
        if (req.params.id != undefined) {
            req.session.user = undefined;
            res.cookie("recordarme", 0, {maxAge: 3800});
            res.redirect("/");
          } 
    }

}



module.exports = userController;