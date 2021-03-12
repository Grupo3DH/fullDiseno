
// const db = require("../database/models/index")
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs"); // hashea la password
const { validationResult } = require("express-validator");
const db = require("../database/models");



userController = {
    perfil: function(req,res){

    },
    register: function (req, res) {
        res.render("register")
    },
    createUser: function (req, res) {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("register", { errors: errors.mapped(), old: req.body })
        } else {
            // db.Image.create({
            //     filename: req.files[0].filename
            // }).then(function(user){
            //     db.User.create({
            //         name: req.body.name,
            //         email: req.body.email,
            //         foto: req.files[0].filename,
            //         password: bcrypt.hashSync(toString(req.body.password), 12),
            //         admin: 0
            //     }).then(function(data){

            //     }).catch(function(e){
            //         res.render("not-found")
            //     })
            // })
        }

        // db.Image.create({
        //     path: req.files[0].filename
        // }).then(data){
        //     db.users.create(
        //         email: req.body.email,
        //         password: req.body.password,
        //         avatar: data.path,
        //         id_imagen: data.id
        //     )
        // }.then(user){

        // }.catch(e){

        // }



    },

    login: function (req, res) {
        res.render("login")
    },

    processLogin: function (req, res) {
        let usuarios = fs.readFileSync(path.join(__dirname, "../database/usuarios.json"), "utf-8");
            usuarios = JSON.parse(usuarios);
           
        for (i = 0; i < usuarios.length; i++) {
            
            if (usuarios[i].email == req.body.email) {
                
                if (bcrypt.compareSync(toString(req.body.password), usuarios[i].password)) {
                    
                    req.session.usuarioLogueado = {
                        name: usuarios[i].name,
                        email: usuarios[i].email,
                        foto: usuarios[i].foto,
                        admin: usuarios[i].admin
                    }
                    return res.redirect("/");
                }
                
                
            }
               
            
        }
         return res.send("los datos ingresados no coinciden con un usuario logueado");
    }
}

module.exports = userController;


