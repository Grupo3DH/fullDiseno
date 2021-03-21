const db = require("../database/models/index")

productsController = {
    showAll: function (req, res) {
        db.Product.findAll({
            where: {deleted_at: null},
            include: ["image"]
        }).then(function (products) {
            return res.render("allproducts", { products})
        })
    },
    showDetails: function (req, res) {
      db.Product.findAll({
        where: {deleted_at: null},
        include: ["image"]
    }).then(function(products){   
        db.Size.findAll().then(function (talle) {
            db.Color.findAll().then(function (color) {
                db.Product.findByPk(req.params.id, {
                    include: ["image"]
                })
                    .then(function (product) {
                        return res.render("productDetail", { product, talle, color , products})
                    })

            })
        })

      }) 

    },
    search: function (req, res) {
        db.Porduct.findAll({
            where: {deleted_at: null},
            include: ["image"]
        },  
            {
            where: {
                [Op.or]:
                [ {
                    nombre: { [Op.like]: "%" + req.query.search + "%" }
                },
                {
                    descripcion: { [Op.like]: "%" + req.query.search + "%" }
                }

                ]
            }.then(function (listado) {
                return res.render("allproducts", {listado})
            })
        })
    },
     cart: function(req, res) {
        res.render("productCart")
    }

    }

module.exports = productsController;