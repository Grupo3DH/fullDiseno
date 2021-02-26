const fs = require("fs");
const path = require("path");
const db = require("../database/models/index")

productsController = {
    showAll: function (req, res) {
        db.Producto.findAll().then(function (productos) {
            return res.render("allproducts", { allproducts })
        })
    },
    showDetails: function (req, res) {
        db.Producto.findByPk(req.params.id)
            .then(function (producto) {
                res.render("/detail/:id", { producto })
            })
    },
    search: function (req, res) {
        db.Porducto.findAll({
            where: {
                nombre: { [db.Sequelize.Op.like]: "%" + req.query.search + "%" }
            }.then(function (listado) {
                if (listado.lenght != 0)
                    return res.send(listado)
            })
        })
    },
     cart: function(req, res) {
        res.render("../views/productCart")
    }

    }

module.exports = productsController;