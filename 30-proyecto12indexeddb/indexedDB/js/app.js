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
        //mostramos todas las citas
        mostrarCitas();
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
        objectstore.createIndex('cliente','cliente',{unique:false}); 
        objectstore.createIndex('telefono','telefono',{unique:false}); 
        objectstore.createIndex('fecha','fecha',{unique:false}); 
        objectstore.createIndex('hora','hora',{unique:false}); 
        objectstore.createIndex('sintomas','sintomas',{unique:false}); 

        console.log('base de datos creada y lista');
    }
    //cuando el formulario se envia
    form.addEventListener('submit', agregarDatos);

    function agregarDatos(e){
        e.preventDefault();

        const nuevaCita ={
            mascota:    nombreMascota.value,
            cliente:    nombreCliente.value,
            telefono:   telefono.value,
            fecha:      fecha.value,
            hora:       hora.value,
            sintomas:   sintomas.value
        }

        //console.log(nuevaCita);

        //EN INDEXEDdb se utilizan las transacciones
        let transaction = DB.transaction(['citas'], 'readwrite');//readwrite es para escribir
        let objectstore = transaction.objectStore('citas');//permite trabajar con la base de datos
        //console.log(objectstore);

        let peticion = objectstore.add(nuevaCita);
        //add esta en el proto del objectStore
        console.log(peticion);
        //cuando es exitosa la peticion
        peticion.onsuccess = () => {
            form.reset();
        }
        //cuando se completa la agregacion de campos a la db
        //la transaction debe pasar po pasos
        transaction.oncomplete = () => {
            console.log('Cita Agregada');
            //para agregar mas de una 
            mostrarCitas();
        }

        transaction.onerror = () =>{
            console.log('Hubo un error');
        }

    }

    //mostrar citas

    function mostrarCitas(){
        // limpiar las citas anterioeres

        while(citas.firstChild){
            citas.removeChild(citas.firstChild);
        }

        //siempre que trabajamos con db requerimos un objectstore
        let objectStore = DB.transaction('citas').objectStore('citas');

        //open course, esto retorna una peticion

        // el cursor es el que va ir recorriendo los registros

        objectStore.openCursor().onsuccess = function(e){
            //el cursor se va a ubicar en el registro indicado para acceder  a lso datos
            let cursor = e.target.result;
           // console.log(cursor);
            //comprobamos si existe un curso

            if(cursor){
                let citaHTML = document.createElement('li');
                //le damos un id personalizado
                citaHTML.setAttribute('data-cita-id', cursor.key);  // el key esta afuera del value
                citaHTML.classList.add('list-group-item');
                //creamos la vista
                citaHTML.innerHTML =`
                        <p class="font-weight-bold"> 
                        Mascota: <span class="font-weight-normal">
                        ${cursor.value.mascota}
                        </span>
                    </p>
                    <p class="font-weight-bold"> 
                        Cliente: <span class="font-weight-normal">
                        ${cursor.value.cliente}
                        </span>
                    </p>
                    <p class="font-weight-bold"> 
                        telefono: <span class="font-weight-normal">
                        ${cursor.value.telefono}
                        </span>
                    </p>
                    <p class="font-weight-bold"> 
                        Fecha: <span class="font-weight-normal">
                        ${cursor.value.fecha}
                        </span>
                    </p>
                    <p class="font-weight-bold"> 
                        Hora: <span class="font-weight-normal">
                        ${cursor.value.hora}
                        </span>
                    </p>
                    <p class="font-weight-bold"> 
                        Sintomas: <span class="font-weight-normal">
                        ${cursor.value.sintomas}
                        </span>
                    </p>
                `;
                //creando el boton de borrar
                const botonBorrar = document.createElement('button');
                botonBorrar.classList.add('borrar','btn','btn-danger');

                botonBorrar.innerHTML = '<span aria-hidden="true"> x </span> Borrar';
                botonBorrar.onclick = borrarCita;   //cuando el boton sea oprimido
                //agregando el boton
                citaHTML.appendChild(botonBorrar);

                //Append en el padre

                citas.appendChild(citaHTML);
                //pasa al siguiente campo, consulta el siguiente registro
                cursor.continue();
            }else{
                //cuando no hay registro de citas
                if(!citas.firstChild){
                    headingAdministra.textContent = 'Agrega citas para comenzar';
                    let listado = document.createElement('p');
                    listado.classList.add('text-center');
                    listado.textContent = 'No hay registros';
                    citas.appendChild(listado);
                }else{
                    //agrega heading si hay citas
                    headingAdministra.textContent = 'Administra tus citas';
                }

            }
        }
    }

    //para borrar citas

    function borrarCita(e){
        //console.log(e.target.parentElement.getAttribute('data-cita-id'));   //obtenemos el id de la cita
        let citaID= Number(e.target.parentElement.getAttribute('data-cita-id'));    //para enviar a la bd necesitamos que sea de tipo number

        //EN INDEXEDdb se utilizan las transacciones
        let transaction = DB.transaction(['citas'], 'readwrite');//readwrite es para escribir
        let objectstore = transaction.objectStore('citas');//permite trabajar con la base de datos

        let peticion = objectstore.delete(citaID);//Elimina con el id de la vista
        //la transactions se completa
        transaction.oncomplete = () => {
            //removemos
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);

            console.log(`se elimino la cita con el ID: ${citaID}`);
            //verificamos si tiene elementos para cambiear el heading
            if(!citas.firstChild){
                headingAdministra.textContent = 'Agrega citas para comenzar';
                let listado = document.createElement('p');
                listado.classList.add('text-center');
                listado.textContent = 'No hay registros';
                citas.appendChild(listado);
            }else{
                //agrega heading si hay citas
                headingAdministra.textContent = 'Administra tus citas';
            }
        }
    }

});