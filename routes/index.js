const express = require('express'); 
const router = express.Router();

//importar el controlador
const rutasControlador = require('../controllers/proyectocontroller')

module.exports = function(){

//ruta para el home
router.get('/', rutasControlador.proyecto1 );
router.get('/nuevo-proyecto', rutasControlador.formularioProyecto );
router.post('/nuevo-proyecto', rutasControlador.nuevoProyecto);
return router;

}




