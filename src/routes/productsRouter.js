const express = require("express");
const router = express.Router(); // guarda la ejecucion del metodo router de express
const productsController = require("../controllers/productsController");

router.get("/create", productsController.create)

router.get("/showAll", productsController.showAll)

router.get("/showDetails", productsController.showDetails)

router.get("/Cart", productsController.cart)



module.exports = router; // estamos exportando la variable de arriba que guarda la ejecucion del metodo router