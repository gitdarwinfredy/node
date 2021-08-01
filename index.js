const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

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

