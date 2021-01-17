
userController = {
    login: function(req,res){
        res.render("../views/login")
        let error = validationResult(req);
        if (!error.isEmpty()){
            return res.render("login", {errors: errors.errors})
        }
    },
}
    
module.exports = userController;