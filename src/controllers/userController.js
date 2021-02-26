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
                password: bcrypt.hashSync(req.body.password, 12),
                admin: 0
            })
                fs.writeFileSync(path.join(__dirname, "../database/usuarios.json"), JSON.stringify(usuarios, null, 4));
               return res.send(`Bienvenido ${req.body.name}`) // aca podriaponer res.redirect en caso de una ruta ya registrada tipo welcome. 
        }

    },

    login: function (req, res) {
        res.render("login")
    },

    processLogin: function (req, res) {
        for (i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email == req.body.email) {
                if (bcrypt.compareSync(req.body.password, usuarios[i].password)) {
                    req.session.usuarioLogueado = {
                        name: usuario[i].name,
                        email: usuarios[i].email,
                        foto: usuarios[i].foto,
                        admin: usuarios[i].admin
                    }
                }
                return res.send(`Hola ${usuarioLogueado.name}`)
            } else {
                return res.send("los datos ingresados no coinciden con un usuario logueado")
            }
        }
    }
}

module.exports = userController;