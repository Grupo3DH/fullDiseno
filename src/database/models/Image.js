module.exports = function (sequelize, dataTypes) {
    let alias = "Image";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        filename: {
            type: dataTypes.STRING(1000),
            NotNull: true
        },
        product_id: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        deleted_at: {
            type: dataTypes.DATE
        }
     
}

    let config = {
        tableName: "image",
        timestamps: true, 
        underscored: true, 
        paranoid:true
    
    }

    const Image = sequelize.define(alias, cols, config)
    Image.associate = (models)=>{
        Image.belongsTo(models.Product,       
            {
                as: "product",        
                foreignKey: "product_id"   
            })
            
        }
        return Image;
}
