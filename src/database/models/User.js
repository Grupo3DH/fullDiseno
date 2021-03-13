module.exports = function (sequelize, dataTypes) {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(100),
            NotNull: true
        },
        email: {
            type: dataTypes.STRING(100),
            NotNull: true
        },
        password: {
            type: dataTypes.STRING(1000),
            NotNull: true
        },
        admin: {
            type: dataTypes.TINYINT,
            NotNull: true
        },
        avatar: {
            type: dataTypes.STRING(1000),
            NotNull: true
        },
        sale_id: {
            type: dataTypes.INTEGER,
            NotNull: true,
            
        },
        cart_id: {
            type: dataTypes.INTEGER,
            NotNull: true,
           
        },
        deleted_at: {
            type: dataTypes.DATE
        }

    }

    let config = {
        tableName: "user",
        timestamps: true, 
        underscored: true, 
        paranoid: true
    }

    const User = sequelize.define(alias, cols, config)
    User.associate = (models)=>{
        User.hasMany(models.Sale,       
            {
                as: "Sale",         
                foreignKey: "sale_id"   
            })
        // User.hasMany(models.Cart,       
        //     {
        //         as: "Cart",        
        //         foreignKey: "cart_id"  
        //     })
    }
    return User;
}