module.exports = function (sequelize, dataTypes) {
    let alias = "Status";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            NotNull: true,
            autoIncrement: true,
            primaryKey: true
        },
        status: {
            type: dataTypes.STRING(100),
            NotNull: true,
            
        },

    }

    let config = {
        tableName: "status",
        timestamp: false, 
        underscored: false, 
        paranoid:true
    }

    const Status = sequelize.define(alias, cols, config)
    Status.associate = (models)=>{
        Status.hasMany(models.Product,
        {
          as: "Product",        
          foreignKey: "status_id"   
         })
    }
    return Status;
}