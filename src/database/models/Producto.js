module.exports = function (sequelize, dataTypes) {
    let alias = "Producto";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING(100),
            NotNull: true
        },
        descripcion: {
            type: dataTypes.STRING(1000),
            NotNull: true
        },
        precioUnitario: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        talle_id: {
            type: dataTypes.STRING(100),
            primaryKey: true
        },
        status_id: {
            type: dataTypes.STRING(100),
            primaryKey: true
        }

    }

    let config = {
        tableName: "productos",
        timestamp: true, //create at update at
        underscored: true, // estan escritos con guiones bajos created_at y updated_at
        paranoid:true
    }

    const Producto = sequelize.define(alias, cols, config)
    Producto.associate = (modelos)=>{
        Producto.hasMany(modelos.Talle,       
            {
                as: "Talle",        //este es un alias de la relación 
                foreignKey: "talle_id"   //la columna fk de la tabla products (la que apunta al id de la tabla brands)
            }),
        Producto.hasMany(modelos.Status,       
            {
                as: "Status",        //este es un alias de la relación 
                foreignKey: "status_id"   //la columna fk de la tabla products (la que apunta al id de la tabla states)
            })
    }
    return Producto;
}