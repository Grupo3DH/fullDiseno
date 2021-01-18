productsController = {
    all: function(req,res){
        res.render("../views/allProducts")
    },
    details: function(req,res){
        res.render("../views/productDetail")
    },
    cart: function(req,res){
        res.render("../views/productCart")
    }
}

module.exports = productsController;