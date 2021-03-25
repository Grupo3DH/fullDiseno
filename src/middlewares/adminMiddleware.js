function adminMiddleware(req, res, next){
    if(typeof req.session.user != "undefined" && req.session.user.admin == 1){ 
        next();   
    } else {
        res.redirect("/admin/denegado")
    }
   
}

module.exports = adminMiddleware;