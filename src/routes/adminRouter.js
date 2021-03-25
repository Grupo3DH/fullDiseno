const express = require("express");
const router = express.Router(); // guardo solo la funcionalidad de router de express
const adminController = require("../controllers/adminController");
const multerProduct = require("../middlewares/multerProduct");
const adminMiddleware = require("../middlewares/adminMiddleware");

router.get("/denegado", adminController.denegado);

router.get("/", adminMiddleware, adminController.admin);
router.get('/logout', adminController.logout);

router.get("/config", adminMiddleware, adminController.config);

router.get("/create",adminMiddleware, adminController.create); //CREATE
router.post("/create", multerProduct.any() , adminController.newProduct); // recibe los datos del formulario

router.get("/edit/:id", adminMiddleware,  adminController.editProduct); // vista FORMULARIO DE EDICION DE UN PRODUCTO
router.put("/edit/:id", multerProduct.any(), adminController.updateProduct); // ENVIO DEL FORMULARIO DEL PRODUCTO EDITADO

router.delete("/delete/:id", adminController.deleteProduct); // BORRAR UN PRODUCTO


module.exports = router;