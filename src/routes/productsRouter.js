const express = require("express");
const router = express.Router(); // guarda la ejecucion del metodo router de express
const productsController = require("../controllers/productsController");



router.get("/showAll", productsController.showAll); //MOSTRAR TODOS

router.get("/detail/:id", productsController.showDetails); // DETALLE DE PRODUCTO

router.get("/search", productsController.search); // buscar producto

router.get("/cart", productsController.cart); //CARRITO DE COMPRAS

module.exports = router; 