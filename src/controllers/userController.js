const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt"); // hashea la password
const { validationResult } = require("express-validator");



let usuarios = fs.readFileSync(path.join(__dirname, "../database/usuarios.json"), "utf-8");
usuarios = JSON.parse(usuarios);

userController = {
    login: function (req, res) {
        res.render("login")
    },
    processLogin: function (req, res) {
        for (i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email == req.body.email) {
                if (bcrypt.compareSync(req.body.password, usuarios[i].password))
                    return res.render(`Hola ${req.body.name}`)
            } else {
                return res.send("los datos ingresados no coinciden")
            }
        }
    },
    register: function (req, res) {
        res.render("register")
    },
    createUser: function (req, res) {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("register", { errors: errors.mapped(), old: req.body })
        } else {
            usuarios.push({
                name: req.body.name,
                email: req.body.email,
                foto: req.files[0].filename,
                password: bcrypt.hashSync(req.body.password, 12)
            }),
                fs.writeFileSync(path.join(__dirname, "../database/usuarios.json"), JSON.stringify(usuarios, null, 4)),
                res.send("Bienvenidos") // aca podriaponer res.redirect en caso de una ruta ya registrada tipo welcome. 
        }

    }
}

module.exports = userController;