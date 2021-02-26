const db = require("../database/models/index")

module.exports = {
    create: function(req,res){
        res.render("../views/agregarProduct")
    },
    newProduct: function(req,res){
        db.Producto.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            talle_id: req.body.talle,
            status_id: req.body.status,

        }).then(function(){
            res.redirect("/allproducts")
         })
    },
    editProduct: function(req,res){
        db.Porducto.findByPk(req.params.id)
            .then(function(producto){
            res.render("../views/detail", {producto})
        })
    },
    updateProduct: function(req,res){
        db.Producto.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            talle_id: req.body.talle,
            status_id: req.body.status,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(nuevoProducto) {
            res.redirect("/allproducts")
        }).catch(function(e){
            res.send(e)
        })
    },
    deleteProduct: function(req,res){
        db.Producto.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(borrada) {
            res.redirect("/allproducts")
        })
        .catch(function(e) {
            return res.send(e)
        })
    }
}