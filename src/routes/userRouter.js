const express = require("express");
const router = express.Router();
const path = require("path");
const { ckeck, validationResult, body, check} = require("express-validator");
const userController = require("../controllers/userController");


// /user/register 
router.get("/register", userController.register);
router.post("/register", upload.any(), userController.create);

// /user/login
router.get("/login", [
    check("contraseña").isLength({min:8}).isEmpty.withMessage("Su contraseña debe contener al menos 8 caracteres"),  //preguntar si esto funciona asi...
    check("correo electrónico").isEmail().isEmpty.withMessage("Su contraseña es inválida"),
], userController.login)


module.exports = router;