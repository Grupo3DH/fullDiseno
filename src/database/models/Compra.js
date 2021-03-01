module.exports = function (sequelize, dataTypes) {
    let alias = "Compra";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        carrito_id: {
            type: dataTypes.STRING(100),
            
        },
        status_id: {
            type: dataTypes.STRING(1000),
            
        }

    }

    let config = {
        tableName: "compra",
        timestamp: true, //create at update at
        underscored: true, // estan escritos con guiones bajos created_at y updated_at
        paranoid:true
    }

    const Compra = sequelize.define(alias, cols, config)
    Compra.associate = (modelos)=>{
    Compra.belongsTo(modelos.Carrito,       
        {
            as: "Carrito",        //este es un alias de la relación 
            foreignKey: "carrito_id"   //la columna fk de la tabla products (la que apunta al id de la tabla brands)
        }),
    Compra.hasMany(modelos.Status,       
        {
            as: "Status",        //este es un alias de la relación 
            foreignKey: "status_id"   //la columna fk de la tabla products (la que apunta al id de la tabla states)
        })
    }
    return Compra;
}