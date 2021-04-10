const express = require("express");
const router = express.Router();


const userController = require("../controllers/userController");
const registerValidation = require("../validations/registerValidations"); 
const loginValidation = require("../validations/loginValidations"); 
const upload = require("../middlewares/multerRegister"); 



//perfil
router.get("/perfil/:id", userController.perfil);
router.get("/edit/:id", userController.edicion);
router.put("/edit/:id", upload.single("avatar"), userController.update);

// /user/register 
router.get("/", userController.register);
router.post("/register", upload.single("avatar"), registerValidation, userController.createUser); 

// /user/login
router.get("/login", userController.login);
router.post("/login",loginValidation, userController.processLogin);
router.get("/logout", userController.logout);

router.delete("/delete/:id", userController.delete);

router.get("/contact", userController.contact);

module.exports = router;