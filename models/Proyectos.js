const Sequelize = require('sequelize');

const db = require('../config/db');

//Proyectos va a estar conectado con la base de datos
const Proyectos = db.define('proyectos', {

    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },

    nombre : Sequelize.STRING,

    url : Sequelize.STRING


});

module.exports = Proyectos;