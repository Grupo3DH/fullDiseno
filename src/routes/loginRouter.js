const express = require("express");
const router = express.Router();
const path = require("path");


router.get("/login", function(req,res){
    res.render("../views/login")
})


module.exports = router;