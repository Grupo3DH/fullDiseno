const express = require("express");
const router = express.Router();
const path = require("path");
const userController = require("../controllers/userController");
const registerValidation = require("../validations/registerValidations"); // exporto las validaciones
const upload = require("../middlewares/multerRegister"); // tengo que ponerle upload???


// /user/register 
router.get("/register", userController.register);
router.post("/register", upload.any(), userController.createUser);

// /user/login
router.get("/login", userController.login) // faltan las validaciones
router.post("/login", registerValidation, userController.processLogin)

module.exports = router;