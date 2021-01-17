const express = require("express");
const router = express.Router(); // guarda la ejecucion del metodo router de express
const path = require("path");

router.get("/productAll", function(req,res){
    res.render("../views/allProducts")
})

router.get("/productsDetail", function(req,res){
    res.render("../views/productDetail")
})

router.get("/productCart", function(req,res){
    res.render("../views/productCart")
})



module.exports = router; // estamos exportando la variable de arriba que guarda la ejecucion del metodo router