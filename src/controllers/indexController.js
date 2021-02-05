// const db = require("../database/models/index");

indexController = {
    index: function(req,res){
        // db.Producto.findAll()
        //.then(function(productos){
//      return res.render("index", {peliculas})
        //})
        res.render("../views/index")  //esto deberia sacarlo
    }
}


module.exports = indexController;