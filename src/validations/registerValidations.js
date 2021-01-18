const { check, body } = require('express-validator');

module.exports = [
    check("contraseña").isLength({min:8}).isEmpty().withMessage("Su contraseña debe contener al menos 8 caracteres"),  //preguntar si esto funciona asi...
    check("correo electrónico").isEmail().isEmpty().withMessage("Su contraseña es inválida")
]
