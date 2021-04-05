module.exports = function (sequelize, dataTypes) {
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            NotNull: true,
            autoIncrement: true,
            primaryKey: true
        },
        category: {
            type: dataTypes.STRING(100),
            NotNull: true
            
        }
    }

    let config = {
        tableName: "category",
        timestamps: false, //create at update at
        underscored: false, // estan escritos con guiones bajos created_at y updated_at
        paranoid:true
    }

    const Category = sequelize.define(alias, cols, config)
    Category.associate = (models)=>{
        Category.hasMany(models.Product,
      {
       as: "product",        
      foreignKey: "category_id"   
    })
    }
    return Category;
}