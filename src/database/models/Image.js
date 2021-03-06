module.exports = function (sequelize, dataTypes) {
    let alias = "Image";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        filename: {
            type: dataTypes.STRING(100),
            NotNull: true
        },
        product_id:{
            type: dataTypes.INTEGER,
            NotNull: true
        }
     
}

    let config = {
        tableName: "image",
        timestamp: true, 
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
