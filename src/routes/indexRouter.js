const express = require("express");
const router = express.Router();
const path = require("path");


router.get("/index", function(req,res){
    res.render("../views/index")
})


module.exports = router;