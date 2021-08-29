const Sequelize = require('sequelize');
const slug = require('slug');
const shortid = require('shortid');

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


},{ hooks: {
        beforeCreate(proyector){
        console.log('antes de insertar en la base de datos');
        const url = slug(proyector.nombre).toLowerCase();


        proyector.url = `${url}-${shortid.generate()}`
        }
    }

});

module.exports = Proyectos;