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
    return Usuario;
}