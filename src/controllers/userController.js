const { validationResult } = require("express-validator");


userController = {
    login: function(req,res){
        res.render("../views/login")
    },
    processLogin: function(req,res){
        let error = validationResult(req);
        if (error.isEmpty()){
            return res.render("login", {errors: {msg: "Error"}})
        } else {
            return res.render("login", {errors: errors.errors})
        }
    }
}
    
module.exports = userController;