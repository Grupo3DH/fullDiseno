module.exports = function (sequelize, dataTypes) {
    let alias = "Size";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            NotNull: true,
            autoIncrement: true,
            primaryKey: true
        },
        size: {
            type: dataTypes.STRING(100),
            NotNull: true
            
        }
    }

    let config = {
        tableName: "size",
        timestamps: false, //create at update at
        underscored: false, // estan escritos con guiones bajos created_at y updated_at
        paranoid:true
    }

    const Size = sequelize.define(alias, cols, config)
    Size.associate = (models)=>{
        Size.hasMany(models.Product,
      {
       as: "Product",        
      foreignKey: "size_id"   
    })
    }
    return Size;
}