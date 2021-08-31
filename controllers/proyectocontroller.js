const Proyectos = require('../models/Proyectos');



exports.proyecto1 = async (req,res) =>{
    // consulta la base de datos y la asigna a la variable proyectos
    //controlador interactua con el modelo trae los resultados los asigna
    //la variable y se los pasa a las vistas
    //en el modelo es que se crea la informacion.
    const proyectos = await Proyectos.findAll();
    res.render('index.pug', {
        nombrePagina : 'Proyecto',
        proyectos
    });
}
//hola
exports.formularioProyecto = async (req,res) =>{
    const proyectos = await Proyectos.findAll();
    res.render('nuevoproyecto.pug', {
        nombrePagina : 'Nuevo Proyecto',
        proyectos
        
    });
}
 exports.nuevoProyecto = async (req,res) =>{
    const proyectos = await Proyectos.findAll();
     //enviar a la consola lo que el usuario escriba
     //console.log(req.body);

     // validamos que tengamos algo en el input
    //const{nombre}= req.body;
    const nombre= req.body.nombre;
    const url = "";

    let errorIngreso = [];

    if(!nombre){
        errorIngreso.push({'texto': 'Agrega un nombre al proyecto'})
        // mi arreglo que esta vacio le  voy a insertar un nuevo elemento con push
    }
    //si hay errorIngreso
    if(errorIngreso.length > 0){
        res.render('nuevoproyecto.pug',{
            nombrePagina : 'Nuevo Proyecto',
            errorIngreso,
            proyectos
            //le estamos pasando los errores a la vista- 
            //en esta parte pasamos las variables
        })
    } else {
        //no hay errores- es por que hay un errorIngreso
        //insertar en la BD.
        //podemos agregarle algo extra a nuestros objetos antes de almacenarlos
        //en este caso se repitio el nombre y lo pasa al objeto url
        
        
        const proyecto = await Proyectos.create({nombre, url});
        res.redirect('/');
        
    }

 }

 exports.proyectoPorUrl = async (req,res, next) =>{
     //res.send(req.params.url);
    const proyectos = await Proyectos.findAll();
    const proyecto = await Proyectos.findOne({
    where: {
        url: req.params.url
    }

  });

    if(!proyecto) return next();

   //render a la vista
   res.render('tareas.pug',{
        nombrePagina : 'Tareas del Proyecto',
        proyecto,
        proyectos

   })
 
 }

 exports.formularioEditar = async (req, res, next) => {
    const proyectos =  await Proyectos.findAll();
    const proyecto = await Proyectos.findOne({
        where: {
            id: req.params.id
        }
    });

    if(!proyecto) return next();
    //render a la vista
    res.render('nuevoproyecto.pug', {
        nombrePagina : 'Editar Proyecto',
        proyecto,
        proyectos

    })


 }


 exports.actualizarProyecto = async (req,res) =>{
    const proyectos = await Proyectos.findAll();
     //enviar a la consola lo que el usuario escriba
     //console.log(req.body);

     // validamos que tengamos algo en el input
    //const{nombre}= req.body;
    const nombre= req.body.nombre;
    const url = "";

    let errorIngreso = [];

    if(!nombre){
        errorIngreso.push({'texto': 'Agrega un nombre al proyecto'})
        // mi arreglo que esta vacio le  voy a insertar un nuevo elemento con push
    }
    //si hay errorIngreso
    if(errorIngreso.length > 0){
        res.render('nuevoproyecto.pug',{
            nombrePagina : 'Nuevo Proyecto',
            errorIngreso,
            proyectos
            //le estamos pasando los errores a la vista- 
            //en esta parte pasamos las variables
        })
    } else {
        //no hay errores- es por que hay un errorIngreso
        //insertar en la BD.
        //podemos agregarle algo extra a nuestros objetos antes de almacenarlos
        //en este caso se repitio el nombre y lo pasa al objeto url
        
        
        const proyecto = await Proyectos.update(
            {nombre: nombre},
            {where : {
                id: req.params.id
            } }
            
            
            );
        res.redirect('/');
        
    }

 }




