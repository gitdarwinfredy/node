const express = require('express'); 
const router = express.Router();

//se valida express validator
const {body} = require('express-validator');

//importar el controlador
const rutasControlador = require('../controllers/proyectocontroller');

module.exports = function(){

//ruta para el home
router.get('/', rutasControlador.proyecto1 );
router.get('/nuevo-proyecto', rutasControlador.formularioProyecto );
router.post('/nuevo-proyecto', body('nombre').not().isEmpty().trim().escape(),
rutasControlador.nuevoProyecto); 
router.get('/proyectos/:url', rutasControlador.proyectoPorUrl);
router.get('/proyecto/editar/:id',rutasControlador.formularioEditar);
router.post('/nuevo-proyecto/:id', body('nombre').not().isEmpty().trim().escape(),
rutasControlador.actualizarProyecto);
return router;
}





