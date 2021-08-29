const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');


// Crear la conexion a la BD
const db = require('./config/db');

//importar el modelo
require('./models/Proyectos');

//conexion de BD sequelize con el servidor mysql
db.sync()
    .then(() => console.log('conectados al servidor'))
    .catch(error => console.log('Error'));

//helpers con algunas funciones
const helpers = require("./helpers");


//crear una app de express
const app= express();

//donde cargar los archivos estaticos
app.use(express.static('public'));

//habilitar pug
app.set('view Engine' , 'pug');

//añadir la carpeta de vistas
app.set('views' , path.join(__dirname, './views' ));

//despues de las vistas pasar vardump a la aplicacion

app.use((req, res, next) => {
    res.locals.vardump = helpers.vardump;
    next();

});



//habilitar el bodyParaser para leer los datos en el formulario
app.use(bodyParser.urlencoded({extended: true}));


app.use('/', routes());

app.listen(3000);

