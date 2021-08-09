const Proyectos = require('../models/Proyectos');
const slug = require('slug');


exports.proyecto1 = (req,res) =>{
    res.render('index.pug', {
        nombrePagina : 'Proyecto'
    });
}
//hola
exports.formularioProyecto = (req,res) =>{
    res.render('nuevoproyecto.pug', {
        nombrePagina : 'Nuevo Proyecto'
        
    });
}
 exports.nuevoProyecto = async (req,res) =>{
     //enviar a la consola lo que el usuario escriba
     //console.log(req.body);

     // validamos que tengamos algo en el input
    const{nombre}= req.body;

    let errorIngreso = [];

    if(!nombre){
        errorIngreso.push({'texto': 'Agrega un nombre al proyecto'})
        // mi arreglo que esta vacio le  voy a insertar un nuevo elemento con push
    }
    //si hay errorIngreso
    if(errorIngreso.length > 0){
        res.render('nuevoproyecto.pug',{
            nombrePagina : 'Nuevo Proyecto',
            errorIngreso
            //le estamos pasando los errores a la vista- 
            //en esta parte pasamos las variables
        })
    } else {
        //no hay errores- es por que hay un errorIngreso
        //insertar en la BD.
        //podemos agregarle algo extra a nuestros objetos antes de almacenarlos
        //en este caso se repitio el nombre y lo pasa al objeto url
        const url = slug(nombre).toLowerCase();
        const proyecto = await Proyectos.create({nombre, url});
        res.redirect('/');
        



        

    }

 }








