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
            // db.Producto.destroy({
            //     where: {
            //         id: req.params.id
            //     }
            // }).then(function(){

            // })
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
    // search: function(req,res){
    //    // db.Producto.findAll({
    //        where: {
     //   tittle: {[db.Sequelize.Op.like]: "%" + req.query.search + "%",}

    //        }
    //    }).then(function(listado){
     //   if(listado.lenght != 0)  ESTO LO TENEMOS QUE HACER EN LA VISTA
//               return res.send(listado)
    //     })
    //    
    // }
}

module.exports = productsController;