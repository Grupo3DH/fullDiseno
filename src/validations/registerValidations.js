const { check, body } = require('express-validator');

module.exports = [
    check("email").isEmail().isEmpty().withMessage("Debe ingresar un email válido"),
    check("password").isLength({min:8}).withMessage("Su contraseña debe contener al menos 8 caracteres")
    // body("email").custom(function(value){}
    // los campos contraseña y correo electronico deben ser los mismo datos que pusimos en el campo name del formulario
]
