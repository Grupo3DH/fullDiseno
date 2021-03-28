const db = require("../../database/models/index");

module.exports = {
    list: function (req, res) {
        db.Product.findAll({
            where: { deleted_at: null },
            include: ["image"]
        }).then(function (products) {
            for (let i = 0; i < products.length; i++) {
                products[i].setDataValue("endpoint", "/api/products/" + peliculas[i].id)
            }
            let respuesta = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: "/api/products"
                },
                data: products

            }
            res.json(products)
        })
    },
    total: function (req, res) {
        db.Product.count().then(function(numero){
            res.json(numero)
        })
    },

    detail: function (req, res) {
        db.Size.findAll().then(function (talle) {
            db.Color.findAll().then(function (color) {
                db.Product.findByPk(req.params.id, {
                    include: ["image"]
                })
                    .then(function (product) {
                        for (let i = 0; i < products.length; i++) {}
                        let respuesta = {
                            meta: {
                                status: 200,
                                total: products.length,
                                url: "/api/products/:id"
                            },
                            data: product
                        }
                        res.json(product, talle, color)
                    })

            })
        })

    }
}