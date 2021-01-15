const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

module.exports = {
    index: function(req,res){
        res.render("../views/index")
    }
}