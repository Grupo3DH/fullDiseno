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
        res.render("./adminConfig")
    },
    create: function(req,res){
        db.Size.findAll().then(function(talle){
            return res.render("./agregarProduct", {talle})
        }),
        db.Color.findAll().then(function(colores){
            return res.render("./agregarProduct", {colores})
        })
        
    },
    newProduct: function(req,res){
         db.Product.create({
            name: req.body.nombre,
            description: req.body.descripcion,
            price: req.body.precio,
            size_id: req.body.talle,
            color_id: req.body.color,
            status_id: 1
        }).then(function(resultado){
            db.Image.create({
                filename: req.files[0].filename,
                product_id: resultado.id
            })
            
            })
            .then(function(producto){
                res.redirect('/products/all')
            }).catch(function(e){
            console.log(e)
        })
    },
    editProduct: function(req,res){
        db.Product.findByPk(req.params.id)
            .then(function(product){
            res.render("-/editarProduct", {product})
        })
    },
    updateProduct: function(req,res){
        db.Product.update({
            name: req.body.nombre,
            description: req.body.descripcion,
            price: req.body.precio,
            img_id: req.files[0].filename,
            size_id: req.body.talle,
            color_id: req.body.color,
            status_id: 1,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(nuevoProducto) {
            res.redirect('/products/all')
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
            res.redirect('/products/all')
        })
        .catch(function(e) {
            return res.send(e)
        })
    }
}