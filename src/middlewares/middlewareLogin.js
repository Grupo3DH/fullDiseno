const db = require("../database/models")

module.exports = function(req, res, next) {
    if(typeof req.session.user != 'undefined') {
        res.locals.user = req.session.user
    } else if (typeof req.cookies.recordarme != 'undefined') {
            db.User.findByPk(req.cookies.recordarme)
            .then(function(resultado){
                res.locals.user = resultado;
                req.session.user = resultado;
            }).catch(function(e){
               res.render("not-found")
            })
        }
    

    next()
}

// esto no se si esta Ok...

// module.exports = function(req,res,next){
//     if ( typeof req.session != "undefined" && typeof req.session.usuarioLogueado != "undefined") {
//         res.locals.usuarioLogueado = req.session.usuarioLogueado;
//     }
//     next();
// }