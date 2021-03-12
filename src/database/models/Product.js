module.exports = function (sequelize, dataTypes) {
    let alias = "Product";
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
        description: {
            type: dataTypes.STRING(1000),
            NotNull: true
        },
        price: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        size_id: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        color_id: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        status_id: {
            type: dataTypes.INTEGER,

        },
        deleted_at: {
            type: dataTypes.DATE
        }

    }

    let config = {
        tableName: "product",
        timestamps: true,
        underscored: true,
        paranoid: true,

    }

    const Product = sequelize.define(alias, cols, config)
    Product.associate = (models) => {
        Product.hasMany(models.Image,
            {
                as: "image",
                foreignKey: "product_id"
            }),
        Product.belongsTo(models.Size,
            {
                as: "size",
                foreignKey: "size_id"
            }),
            Product.belongsTo(models.Color,
                {
                    as: "color",
                    foreignKey: "color_id"
                }),
            Product.belongsTo(models.Status,
                {
                    as: "status",
                    foreignKey: "status_id"
                })
    }
    return Product;
}