const db = require("../database/models/index")


module.exports = {
    denegado: function (req, res) {
        res.render("usuariono")
    },
    admin: function (req, res) {
        // req.session.usrInput = null;
        res.render("admin");
    },
    logout: function (req, res) {
        req.session.user = undefined;
        res.cookie("recordarme", undefined, { maxAge: 0 });
        res.redirect('/');
    },
    config: function (req, res) {
        res.render("./adminConfig")
    },
    create: function (req, res) {
        db.Category.findAll().then(function (category) {
        db.Size.findAll().then(function (talle) {
            db.Color.findAll().then(function (color) {
                return res.render("agregarProduct", { talle, color, category })
            })

        })
    })

    },
    newProduct: function (req, res) {
        db.Product.create({
            name: req.body.nombre,
            description: req.body.descripcion,
            price: req.body.precio,
            size_id: req.body.talle,
            color_id: req.body.color,
            status_id: 1,
            category_id: req.body.category
        }).then(function (resultado) {
            let array = [];
            for (let i = 0; i < req.files.length; i++) {
                let promesa = db.Image.create({
                    filename: req.files[i].filename,
                    product_id: resultado.id
                })
                array.push(promesa);
            }
            Promise.all(array).then(function () {
                res.redirect('/products/all')
            })

        }).catch(function (e) {
            console.log(e)
        })
    },
    editProduct: function (req, res) {
        db.Category.findAll().then(function (category) {
            db.Size.findAll().then(function (talle) {
                db.Color.findAll().then(function (color) {
                    db.Product.findByPk(req.params.id)
                        .then(function (product) {
                            return res.render("editarProduct", { product, talle, color, category })
                        })

                })

            })
        })
        },
            updateProduct: function (req, res) {

                db.Product.update({
                    name: req.body.nombre,
                    description: req.body.descripcion,
                    price: req.body.precio,
                    size_id: req.body.talle,
                    color_id: req.body.color,
                    status_id: 1,
                    category_id: req.body.category
                }, {
                    where: {
                        id: req.params.id,
                    }
                }).then(function (resultado) {
                    let array = [];
                    for (let i = 0; i < req.files.length; i++) {
                        let promesa = db.Image.create({
                            filename: req.files[i].filename,
                            product_id: req.params.id
                        })
                        array.push(promesa);
                    }
                    Promise.all(array).then(function () {
                        res.redirect('/products/all')
                    })
                }).catch(function (e) {
                    res.send(e)
                })


            },
            deleteProduct: function (req, res) {

                db.Product.update({
                    deleted_at: Date.now()
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                    .then(function () {
                        res.redirect('/products/all');
                    })
                    .catch(function (e) {

                        return res.send(e);
                    })
            }
        }