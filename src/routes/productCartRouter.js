const express = require("express");
const router = express.Router();
const path = require("path");


router.get("/productCart", function(req,res){
    res.render("../views/productCart")
})


module.exports = router;