module.exports = function (sequelize, dataTypes) {
    let alias = "Cart";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        amount: {
            type: dataTypes.INTEGER,
        },
        total: {
            type: dataTypes.DECIMAL,
        },
        product_id: {
            type: dataTypes.STRING(100),
            
        },
        user_id: {
            type: dataTypes.STRING(100),
            
        },
        status_id: {
            type: dataTypes.STRING(100),
            
        }

    }

    let config = {
        tableName: "cart",
        timestamps: true, 
        underscored: true, 
        paranoid:true
    }

    const Cart = sequelize.define(alias, cols, config)
    Cart.associate = (models)=>{
        Cart.belongsTo(models.Product,       
            {
                as: "product",        
                foreignKey: "product_id"   
            }),
            Cart.belongsTo(models.User,       
            {
                as: "user",       
                foreignKey: "user_id"   
            }),
            Cart.hasMany(models.Status,       
            {
                as: "status",        
                foreignKey: "status_id"   
            })
    }
    return Cart;
}