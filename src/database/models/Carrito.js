module.exports = function (sequelize, dataTypes) {
    let alias = "Carrito";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cantidad: {
            type: dataTypes.INTEGER,
        },
        total_a_pagar: {
            type: dataTypes.DECIMAL,
        },
        productos_id: {
            type: dataTypes.STRING(100),
            
        },
        usuarios_id: {
            type: dataTypes.STRING(100),
            
        },
        status_id: {
            type: dataTypes.STRING(100),
            
        }

    }

    let config = {
        tableName: "carrito",
        timestamp: true, //create at update at
        underscored: true, // estan escritos con guiones bajos created_at y updated_at
        paranoid:true
    }

    const Carrito = sequelize.define(alias, cols, config)
    Carrito.associate = (modelos)=>{
        Carrito.belongsTo(modelos.Producto,       
            {
                as: "Producto",        //este es un alias de la relación 
                foreignKey: "productos_id"   //la columna fk de la tabla products (la que apunta al id de la tabla brands)
            }),
        Carrito.belongsTo(modelos.Usuario,       
            {
                as: "Usuario",        //este es un alias de la relación 
                foreignKey: "usuarios_id"   //la columna fk de la tabla products (la que apunta al id de la tabla brands)
            }),
        Carrito.hasMany(modelos.Status,       
            {
                as: "Status",        //este es un alias de la relación 
                foreignKey: "status_id"   //la columna fk de la tabla products (la que apunta al id de la tabla states)
            })
    }
    return Carrito;
}