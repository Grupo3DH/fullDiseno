module.exports = function(req, res, next) {
    if(typeof req.session.usuarioLogueado != 'undefined') {
        res.locals.usuarioLogueado = req.session.usuarioLogueado
    }

    // else if(req.cookies.recordarme != undefined && req.session.loggedUser == undefined){//Si EXISTE la cookie pero NO el session...
    //     let users = fs.readFileSync(path.join(__dirname,"../data/users.json"), "utf8");
    //     users = JSON.parse(users);
    //     let user = users.find(u=> u.id == req.cookies.recordarme);
        
    //     delete user.password;
    //     req.session.loggedUser = user;
    //     res.locals.loggedUser = user;
    // }
    next()
}