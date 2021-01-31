



productsController = {
    create: function(req,res){
        res.render("../views/agregarProduct")
    },
    newProduct: function(req,res){

    },
    editProduct: function(req,res){

    },
    deleteProduct: function(req,res){

    },
    showAll: function(req,res){
        res.render("../views/allProducts")
    },
    showDetails: function(req,res){
        res.render("../views/productDetail")
    },
    cart: function(req,res){
        res.render("../views/productCart")
    },
}

module.exports = productsController;