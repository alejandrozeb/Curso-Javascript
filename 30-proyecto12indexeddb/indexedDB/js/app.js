/* Indexed DB */

let DB; // va a tener lo referente a indexedDB

//selectores de la interfaz

const form = document.querySelector('form'),
      nombreMascota = document.querySelector('#mascota'),
      nombreCliente = document.querySelector('#cliente'),
      telefono = document.querySelector('#telefono'),
      fecha = document.querySelector('#fecha'), //estos campos solo lo soporta chrome
      hora = document.querySelector('#hora'),
      sintomas = document.querySelector('#sintomas'),
      citas = document.querySelector('#citas'),
      headingAdministra = document.querySelector('#administra');    //el heading de la vista

// esperar por el DOM Ready
//indexeddb espera a que el dom este cargado

document.addEventListener('DOMContentLoaded',() => {
    //crear  la base de datos
    let crearDB = window.indexedDB.open('citas', 1);    //indexeddb es para de js, el nombre de la bd, el numero es la version se debe usar numeros enteros, si tenemos mas podemos cambiar 

    //si hay error enviarlo a la consola
    crearDB.onerror = function(){   //agarra el error
        console.log('Hubo un error');
    }

    // si todo esta bien entonces muestra en consola y asifnar la base de datos
    crearDB.onsuccess = function(){
        //console.log('Todo listo!!');
        //asignar a la base de datos global
        DB = crearDB.result;    //devuelve todo lo que tiene la DB
        //console.log(DB);
    }

    //este metodo solo corre una vez y es ideal para creaar el schema de la DB

    crearDB.onupgradeneeded = function(e){
        //console.log('Solo una vez');
        //el evento que corre esta funcion es la misma que crea la base de datos

        let db = e.target.result; //devuelve la base de datos(instancia)
        //console.log(db);

        // definir el objectstore, toma 2 parametros el nombre de la base de datos y segundo las opciones
        //keypath es el indicede la base de datos
        let objectstore = db.createObjectStore('citas',{keypath: 'key',autoIncrement: true });
        // va a generar un id autoincrementable

        //Crear los indices y campos de la base de datos, createIndex: 3 parametos, nombre, keypath  y opciones

        //para insertar los campos
        objectstore.createIndex('mascota','mascota',{unique:false});    //unique evita que se repita la misma informacion dos veces


    }

});