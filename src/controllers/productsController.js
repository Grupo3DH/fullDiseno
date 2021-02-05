const fs = require("fs");
const path = require("path");
// const db = require("../database/models/index")

// let productos = fs.readFileSync(path.join(__dirname, "../database/productos.json"), "utf-8");
// productos = JSON.parse(productos);

productsController = {
    create: function(req,res){
        res.render("../views/agregarProduct")
    },
    newProduct: function(req,res){
        //  db.Producto.create({
        //    title: req.body.
      //  })
    },
    editProduct: function(req,res){

    },
    deleteProduct: function(req,res){

    },
    showAll: function(req,res){
        res.render("../views/allProducts")
        
        // db.Sequelize.query(SELECT * FROM movies).then(function(movies){res.send(movies)}) 
        // db.sequelize.findAll()
    },                                       
    showDetails: function(req,res){
        res.render("../views/productDetail")

        //db.Porducto.findByPk(req.params.id)
    //    .then(function(pelicula){
    //    return res. render("detail", {pelicula})
    //     })
    },
    cart: function(req,res){
        res.render("../views/productCart")
    },
}

module.exports = productsController;