const express = require("express");
const router = express.Router();
const path = require("path");


router.get("/productsDetail", function(req,res){
    res.render("../views/productDetail")
})


module.exports = router;