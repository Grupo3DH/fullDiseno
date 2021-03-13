module.exports = function(req, res, next) {
    if(typeof req.session.user != 'undefined') {
        res.locals.user = req.session.user
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