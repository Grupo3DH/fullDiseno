module.exports = function (sequelize, dataTypes) {
    let alias = "Color";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            NotNull: true,
            autoIncrement: true,
            primaryKey: true
        },
        color: {
            type: dataTypes.STRING(100),
            NotNull: true
            
        }
    }

    let config = {
        tableName: "color",
        timestamps: false, //create at update at
        underscored: false, // estan escritos con guiones bajos created_at y updated_at
        paranoid:true
    }

    const Color = sequelize.define(alias, cols, config)
    Color.associate = (models)=>{
        Color.hasMany(models.Product,
      {
       as: "Product",        
      foreignKey: "color_id"   
    })
    }
    return Color;
}