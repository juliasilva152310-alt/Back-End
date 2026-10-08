const path = require('path');
const { Sequelize } = require('sequelize');

//Banco SQL local: não exige instalação de servidor de banco de dados.
const sequelize = new Sequelize({
    dialect: 'sqlite',
    Storage: path.join(__dirname, '...', 'database.sqlite'),
    logging: false,
});

module.exports = sequelize;