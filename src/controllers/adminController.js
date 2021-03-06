const db = require("../database/models/index")


module.exports = {
    admin: function(req,res){
        // req.session.usrInput = null;
        res.render("admin");
    },
    logout: function(req, res){
        if (req.params.id != undefined) {
            req.session.usuarioLogueado = undefined;
            res.cookie("recordarme", 0, {maxAge: 0});
            res.redirect("/");
          } 
    },
    config: function(req,res){
        res.render("../views/adminConfig")
    },
    create: function(req,res){
        res.render("../views/agregarProduct")
    },
    newProduct: function(req,res){
        db.Product.create({
            name: req.body.nombre,
            description: req.body.descripcion,
            price: req.body.precio,
            size_id: req.body.talle,
            status_id: "stock",

        }).then(function(resultado){
            db.Image.create({
                filename: req.files[0].filename,
                product_id: resultado.id
            })
            res.redirect('/products/all')
        }).catch(function(e){
            console.log(e)
        })
    },
    editProduct: function(req,res){
        db.Porduct.findByPk(req.params.id)
            .then(function(product){
            res.render("../views/detail", {product})
        })
    },
    updateProduct: function(req,res){
        db.Product.update({
            name: req.body.nombre,
            description: req.body.descripcion,
            price: req.body.precio,
            img_id: req.files[0].filename,
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
        db.Product.destroy({
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