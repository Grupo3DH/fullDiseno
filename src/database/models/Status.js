module.exports = function (sequelize, dataTypes) {
    let alias = "Status";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            NotNull: true,
            autoIncrement: true,
            primaryKey: true
        },
        stock: {
            type: dataTypes.STRING(100),
            
        },
        carrito: {
            type: dataTypes.STRING(100),
            
        },
        comprado: {
            type: dataTypes.STRING(100), 
        }

    }

    let config = {
        tableName: "status",
        timestamp: false, //create at update at
        underscored: false, // estan escritos con guiones bajos created_at y updated_at
        paranoid:true
    }

    const Status = sequelize.define(alias, cols, config)
    Status.associate = (modelos)=>{
        Status.hasMany(modelos.Producto,//ACA SE USA EL HAS MANY 
                        {
                                as: "Producto",        //este es un alias de la relación 
                                foreignKey: "status_id"   //la columna fk de la tabla products (la que apunta al id de la tabla brands)
                        })
    }
    return Status;
}