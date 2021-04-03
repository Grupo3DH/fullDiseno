const db = require("../database/models/index");
const bcrypt = require("bcryptjs"); // hashea la password
const { validationResult } = require("express-validator");

userController = {
    perfil: function(req,res){
        db.User.findByPk(req.params.id)
        .then(function (user){
            return res.render("perfil", {user})
        }).catch((error)=>console.log(error))
    },
    edicion: function(req,res){
        db.User.findByPk(req.params.id)
        .then(function (user){
            return res.render("updateUser", {user})
        }).catch((error)=>console.log(error))
    },
    update: function(req,res){
        db.User.findByPk(req.params.id)
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
            .then(function(user){
                return res.redirect("/perfil", {user})
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
        res.render("login", {msg: ""})
    },

    processLogin: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
        db.User.findOne({
            where: {
                email: req.body.email
            }   
        }).then(function(user){
            if(user && bcrypt.compareSync(toString(req.body.password), user.password)){
                req.session.user = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    admin: user.admin,
                    avatar: user.avatar
                }
               
            if(req.body.recordarme != undefined){ 
                res.cookie("recordarme", req.session.user.id, { maxAge: 15*24*60*60*1000});
            }
            return res.redirect('/')
        
            }
       
        
        })
    } else {
        return res.render("login", { errors: errors.mapped(), old: req.body })
    }
    },
 
    logout: function(req,res){
        req.session.user = undefined;
        res.cookie("recordarme",undefined,{maxAge:0});
        res.redirect('/');
    },
    delete: function(req, res) {         
        db.User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function () {
                res.redirect('/');
            })
            .catch(function (e) {
                
                return res.send(e);
            })
    },

    contact: function (req, res) {
        res.render("contacto")
    }

}



module.exports = userController;