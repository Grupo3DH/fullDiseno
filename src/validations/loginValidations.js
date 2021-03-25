const { check, body } = require('express-validator');

module.exports = [
    check("email")
    .isEmail()
    .withMessage("Debe ingresar un email válido"),
    check("password")
    .notEmpty()
    .withMessage("Debe ingresar un email")
    
]