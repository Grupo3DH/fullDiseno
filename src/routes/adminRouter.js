const express = require("express");
const router = express.Router(); // guardo solo la funcionalidad de router de express
const adminController = require("../controllers/adminController");

router.get("/create", adminController.create); //CREATE
router.post("/create", adminController.newProduct); // recibe los datos del formulario

router.get("/edit/:id", adminController.editProduct); // vista FORMULARIO DE EDICION DE UN PRODUCTO
router.put("/edit/:id", adminController.updateProduct); // ENVIO DEL FORMULARIO DEL PRODUCTO EDITADO

router.delete("/detele/:id", adminController.deleteProduct); // BORRAR UN PRODUCTO


module.exports = router;