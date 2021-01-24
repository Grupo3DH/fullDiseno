const { check, body } = require('express-validator');

module.exports = [
    check("password").isLength({min:8}).isEmpty().withMessage("Su contraseña debe contener al menos 8 caracteres"),  //preguntar si esto funciona asi...
    check("email").isEmail().isEmpty().withMessage("Su contraseña es inválida"),
    body("email").custom(function(value){

    })
    // los campos contraseña y correo electronico deben ser los mismo datos que pusimos en el campo name del formulario
]
