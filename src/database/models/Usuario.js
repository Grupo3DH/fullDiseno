module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
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
        email: {
            type: dataTypes.STRING(100),
            NotNull: true
        },
        password: {
            type: dataTypes.STRING(1000),
            NotNull: true
        },
        admin: {
            type: dataTypes.TINYINT,
            NotNull: true
        },
        compra_id: {
            type: dataTypes.INTEGER,
            NotNull: true,
            primaryKey: true
        },
        carrito_id: {
            type: dataTypes.INTEGER,
            NotNull: true,
            primaryKey: true
        }

    }

    let config = {
        tableName: "usuarios",
        timestamp: true, //create at update at
        underscored: true, // estan escritos con guiones bajos created_at y updated_at
        paranoid:true
    }

    const Usuario = sequelize.define(alias, cols, config)
    Usuario.associate = (modelos)=>{
        Usuario.belongsTo(modelos.Compra,       
            {
                as: "Compra",        //este es un alias de la relación 
                foreignKey: "compra_id"   //la columna fk de la tabla products (la que apunta al id de la tabla brands)
            }),
        Usuario.hasMany(modelos.Carrito,       
            {
                as: "Carrito",        //este es un alias de la relación 
                foreignKey: "carrito_id"   //la columna fk de la tabla products (la que apunta al id de la tabla states)
            })
    }
    return Usuario;
}