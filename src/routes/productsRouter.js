const express = require("express");
const router = express.Router(); // guarda la ejecucion del metodo router de express
const productsController = require("../controllers/productsController");

router.get("/create", productsController.create); //CREATE
router.post("/create", productsController.newProduct); // A DONDE SE ENVIA LA DATA DEL NUEVO PRODUCTO

router.get("/:id/edit", productsController.editProduct); // FORMULARIO DE EDICION DE UN PRODUCTO
router.put("/:id", productsController.editProduct); // ENVIO DEL FORMULARIO DEL PRODUCTO EDITADO
router.delete("/:id", productsController.deleteProduct); // BORRAR UN PRODUCTO

router.get("/showAll", productsController.showAll); //MOSTRAR TODOS

router.get("/:id", productsController.showDetails); // DETALLE DE PRODUCTO

router.get("/cart", productsController.cart); //CARRITO DE COMPRAS

module.exports = router; // estamos exportando la variable de arriba que guarda la ejecucion del metodo router