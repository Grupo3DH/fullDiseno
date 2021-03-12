const fs = require("fs");
const path = require("path");
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
         db.Product.findByPk(req.params.id, {
             include: ["image"]
         })
        .then(function (product) {
            
            res.render("productDetail", { product })                  
        })

    },
    search: function (req, res) {
        db.Porduct.findAll({
            where: {
                nombre: { [db.Sequelize.Op.like]: "%" + req.query.search + "%" }
            }.then(function (listado) {
                if (listado.lenght != 0)
                    return res.send(listado)
            })
        })
    },
     cart: function(req, res) {
        res.render("productCart")
    }

    }

module.exports = productsController;