const express = require('express'); 
const router = express.Router();

//se valida express validator
const {body} = require('express-validator/check');

//importar el controlador
const rutasControlador = require('../controllers/proyectocontroller');

module.exports = function(){

//ruta para el home
router.get('/', rutasControlador.proyecto1 );
router.get('/nuevo-proyecto', rutasControlador.formularioProyecto );
router.post('/nuevo-proyecto', body('nombre').not().isEmpty().trim().escape(),
rutasControlador.nuevoProyecto); 
return router;

}




