const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs"); // hashea la password
const { validationResult } = require("express-validator");



userController = {
    register: function (req, res) {
        res.render("register")
    },
    createUser: function (req, res) {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("register", { errors: errors.mapped(), old: req.body })
        } else {
            let usuarios = fs.readFileSync(path.join(__dirname, "../database/usuarios.json"), "utf-8");
            usuarios = JSON.parse(usuarios);
            usuarios.push({
                name: req.body.name,
                email: req.body.email,
                foto: req.files[0].filename,
                password: bcrypt.hashSync(toString(req.body.password), 12),
                admin: 0
            })
                fs.writeFileSync(path.join(__dirname, "../database/usuarios.json"), JSON.stringify(usuarios, null, 4));
                return res.redirect("/");
               
        }

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