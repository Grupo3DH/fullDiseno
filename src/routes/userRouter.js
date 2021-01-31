const express = require("express");
const router = express.Router();
const path = require("path");

const userController = require("../controllers/userController");
const registerValidation = require("../validations/registerValidations"); 
const upload = require("../middlewares/multerRegister"); 

// /user/register 
router.get("/register", userController.register);
router.post("/register", upload.any(), registerValidation, userController.createUser); //aca vamos a necesitar multer esun middleware a nivel de rutas , no lo necesitamos en toda la aplicacion, es para cuando subimos un file, luego de el ponemos express-validator con las validaciones importadas.

// /user/login
router.get("/login", userController.login);
router.post("/login", registerValidation, userController.processLogin);

module.exports = router;