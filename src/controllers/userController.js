const { validationResult } = require("express-validator");


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
    }
}
    
module.exports = userController;