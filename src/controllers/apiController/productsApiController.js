const db = require("../../database/models/index");

module.exports = {
    list: function (req, res) {
        db.Product.findAll({
            where: { deleted_at: null },
            include: ["image"]
        }).then(function (products) {
            for (let i = 0; i < products.length; i++) {
                products[i].setDataValue("endpoint", "/api/products/" + products[i].id)
            }
            let respuesta = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: "/api/products"
                },
                data: products

            }
            res.json(respuesta)
        }).catch(function () {
            res.json({ status: 500 })
        })
    },
    total: function (req, res) {
        db.Product.count().then(function(numero){
            res.json(numero)
        }).catch(function () {
            res.json({ status: 500 })
        })
    },

    detail: function (req, res) {
        db.Category.findAll().then(function (category) {
        db.Size.findAll().then(function (talle) {
            db.Color.findAll().then(function (color) {
                db.Product.findByPk(req.params.id, {
                    include: ["image"]
                })
                    .then(function (product) {
                        if (product != undefined) {
                        let respuesta = {
                            meta: {
                                status: 200,
                                color: color.length,
                                talle: talle.length,
                                category: category.length,
                                url: "/api/products/" + product.id
                            },
                            data: product
                        }
                        return res.json(respuesta)
                    } else {
                        return res.json({ status: 204 ,msg: "este producto no se encuentra" })
                    }
                })
            })

        })
        }).catch(function () {
            res.json({ status: 500 })
        })

    },
    ultimo: function(req,res){
        db.Products.findAll({
            attributes:  ['name', "description", "price", "id"]
        }
        ).then(function(ultimo){
            
            let respuesta = {
                meta: {
                    status: 200,
                   
                   
                },
                data: ultimo

            }
            res.json(respuesta)
        }).catch(function () {
            res.json({ status: 500 })
        })
    },
    category: function(req,res){
        db.Category.findAll()

            .then(function (categories) {
                if (categories.length > 0) {
                    let apiResponse = {
                        meta: {
                            status: 200,
                            url: "/api/products/category",
                            total: categories.length
                        },
                        data: categories
                    }
                    return res.json(apiResponse)
                } else {
                    return res.json({ status: 204 })
                }
            })
            .catch(function () {
                res.json({ status: 500 })
            })
    }
}