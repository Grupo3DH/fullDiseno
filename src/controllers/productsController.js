const db = require("../database/models/index");
const { Op } = require("sequelize");

module.exports = {
    showAll: function (req, res) {
        db.Product.findAll({
            where: { deleted_at: null },
            include: ["image"]
        }).then(function (products) {
            return res.render("allproducts", { products })
        })
    },
    showDetails: function (req, res) {
        db.Product.findAll({
            where: { deleted_at: null },
            include: ["image"]
        }).then(function (products) {
            db.Size.findAll().then(function (talle) {
                db.Color.findAll().then(function (color) {
                    db.Product.findByPk(req.params.id, {
                        include: ["image"]
                    })
                        .then(function (product) {
                            return res.render("productDetail", { product, talle, color, products })
                        })

                })
            })

        })

    },
    search: function (req, res) {
        db.Product.findAll(
            {
                where: {
                            name: { [Op.like]: "%" + req.query.search + "%" }
                        
                        // {
                        //     description: { [Op.like]: "%" + req.query.search + "%" }
                        // }     
                }, 
                include: ["image"]
            }).then(function (products) {
                
                return res.render("./allproducts", { products })
            }).catch(function(e){
                console.log(e)
            })
    },
    cart: function (req, res) {
        res.render("productCart")
    }
    // pay: function (req, res) {
    //     res.render("pay")
    // }
}

