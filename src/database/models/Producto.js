// module.exports = function (sequelize, dataTypes) {
//     let alias = "Producto";
//     let cols = {
//         id: {
//             type: dataTypes.INTEGER.UNSIGNED,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         title: {
//             type: dataTypes.STRING(500),
//             NotNull: true
//         }

//     }
//     let config = {
//         tableName: "productos",
//         timestamp: true, //create at update at
//         underscored: true // estan escritos con guiones bajos created_at y updated_at
//     }

//     const Producto = sequelize.define(alias, cols, config)
//     return Producto;
// }