const Sequelize = require('sequelize'); //importamos

module.exports = new Sequelize('agenciadeviajes', 'root', '', {
    host: '127.0.0.1',
    port: '3308',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});   //especificamos el nombre de la bd, luego el usuario y password, entre las llaves vienen las opciones de configuracion a partir de defined es configuracion necesario de sequelize.