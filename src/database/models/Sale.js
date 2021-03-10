module.exports = function (sequelize, dataTypes) {
    let alias = "Sale";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cart_id: {
            type: dataTypes.STRING(100),
            
        },
        status_id: {
            type: dataTypes.STRING(1000),
            
        }

    }

    let config = {
        tableName: "sale",
        timestamps: true, //create at update at
        underscored: true, // estan escritos con guiones bajos created_at y updated_at
        paranoid:true
    }

    const Sale = sequelize.define(alias, cols, config)
    Sale.associate = (models)=>{
        Sale.belongsTo(models.Cart,       
        {
            as: "cart",        
            foreignKey: "cart_id"  
        }),
        Sale.hasMany(models.Status,       
        {
            as: "status",       
            foreignKey: "status_id"   
    })
}
    return Sale;
}