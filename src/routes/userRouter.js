const express = require("express");
const router = express.Router();
const path = require("path");

const userController = require("../controllers/userController");
const registerValidation = require("../validations/registerValidations"); 
const upload = require("../middlewares/multerRegister"); 


//perfil
router.get("/perfil/:id", userController.perfil);
router.get("/edit/:id", userController.edicion);
router.put("/edit/:id", upload.single("avatar"), userController.update);

// /user/register 
router.get("/register", userController.register);
router.post("/register", upload.single("avatar"), registerValidation, userController.createUser); //aca vamos a necesitar multer esun middleware a nivel de rutas , no lo necesitamos en toda la aplicacion, es para cuando subimos un file, luego de el ponemos express-validator con las validaciones importadas.

// /user/login
router.get("/login", userController.login);
router.post("/login", userController.processLogin);
router.get("/:id", userController.logout);

router.delete("/delete/:id", userController.delete);

module.exports = router;