const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

indexController = {
    index: function(req,res){
        res.render("../views/index")
    }
}


module.exports = indexController;