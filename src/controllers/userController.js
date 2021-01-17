const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt"); //sirve para hashear la contraseña
const { ckeck, validationResult, body, check} = require("express-validator")

module.exports = {
    login: function(req,res){
        res.render("../views/login")
        let error = validationResult(req);
        if (!error.isEmpty()){
            return res.render("login", {errors: errors.errors})
        }
    }
}
    