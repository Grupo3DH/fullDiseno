



productsController = {
    create: function(req,res){
        res.render()
    },
    showAll: function(req,res){
        res.render("../views/allProducts")
    },
    showDetails: function(req,res){
        res.render("../views/productDetail")
    },
    cart: function(req,res){
        res.render("../views/productCart")
    }
}

module.exports = productsController;