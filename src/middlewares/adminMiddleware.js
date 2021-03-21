function adminMiddleware(req, res, next){
    if(typeof req.session.admin == 1){    
        res.locals.admin = req.session.admin
    }
    next();
}

module.exports = adminMiddleware;