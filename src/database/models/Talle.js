module.exports = function (sequelize, dataTypes) {
    let alias = "Talle";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            NotNull: true,
            autoIncrement: true,
            primaryKey: true
        },
        S: {
            type: dataTypes.TEXT,
            
        },
        M: {
            type: dataTypes.TEXT,
            
        },
        L: {
            type: dataTypes.TEXT, 
        }

    }

    let config = {
        tableName: "talle",
        timestamp: false, //create at update at
        underscored: false, // estan escritos con guiones bajos created_at y updated_at
        paranoid:true
    }

    const Talle = sequelize.define(alias, cols, config)
    Talle.associate = (modelos)=>{
        Talle.hasMany(modelos.Producto,//ACA SE USA EL HAS MANY 
                        {
                                as: "Producto",        //este es un alias de la relación 
                                foreignKey: "talle_id"   //la columna fk de la tabla products (la que apunta al id de la tabla brands)
                        })
    }
    return Talle;
}