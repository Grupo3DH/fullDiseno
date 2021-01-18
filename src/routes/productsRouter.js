const express = require("express");
const router = express.Router(); // guarda la ejecucion del metodo router de express
const path = require("path");
const productsController = require("../controllers/productsController");

router.get("/productAll", productsController.all)

router.get("/productsDetail", productsController.details)

router.get("/productCart", productsController.cart)



module.exports = router; // estamos exportando la variable de arriba que guarda la ejecucion del metodo router