const express = require("express");
const router = express.Router(); // guarda la ejecucion del metodo router de express
const productsController = require("../controllers/productsController");

router.get("/create", productsController.create); //CREATE
router.post("/create", productsController.newProduct); // recibe los datos del formulario

router.get("/edit/:id", productsController.editProduct); // vista FORMULARIO DE EDICION DE UN PRODUCTO
router.put("/edit/:id", productsController.updateProduct); // ENVIO DEL FORMULARIO DEL PRODUCTO EDITADO

router.delete("/detele/:id", productsController.deleteProduct); // BORRAR UN PRODUCTO

router.get("/showAll", productsController.showAll); //MOSTRAR TODOS

router.get("/detail/:id", productsController.showDetails); // DETALLE DE PRODUCTO

router.get("/search", productsController.search); // buscar producto

router.get("/cart", productsController.cart); //CARRITO DE COMPRAS

module.exports = router; // estamos exportando la variable de arriba que guarda la ejecucion del metodo router