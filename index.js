const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

// Crear la conexion a la BD
const db = require('./config/db');

//importar el modelo
require('./models/Proyectos');

db.sync()
    .then(() => console.log('conectador al servidor'))
    .catch(error => console.log('Error'));


//crear una app de express
const app= express();

//donde cargar los archivos estaticos
app.use(express.static('public'));

//habilitar pug
app.set('view Engine' , 'pug');

//añadir la carpeta de vistas
app.set('views' , path.join(__dirname, './views' ));

//habilitar el bodyParaser para leer los datos en el formulario
app.use(bodyParser.urlencoded({extended: true}));


app.use('/', routes());

app.listen(3000);

