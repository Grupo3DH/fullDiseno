function adminMiddleware(req, res, next){
    if(typeof req.session.usuarioLogueado == "undefined" || req.session.usuarioLogueado.type != 1){    
        return res.redirect("/");
    } else{
        next();
    }
}

module.exports = adminMiddleware;