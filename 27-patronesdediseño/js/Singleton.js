/* este define la creacion de un objeto que solo tiene una instancia un ejemplo un object literal(puede ser un ejemplo) este objeto tendras bastantes funciones que seran llamadas en una sola instancia   */

const alumnos ={
    //todos los alumnos

    listaAlumnos: [],

    // obtener un alumno
    //metodos
    get: function(id){
        console.log(id);
        return this.listaAlumnos[id];
    },

    //crear un alumno

    crear: function(datos){
        console.log(datos);
        this.listaAlumnos.push(datos);
    },

    //listar todos los alumnos

    listado: function(){
        return this.listaAlumnos;
    }

}

const infoAlumno = {
    nombre: 'Juan',
    edad: 20
}
const infoAlumno2 = {
    nombre: 'Pablo',
    edad: 21
}

alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);
//listado de todo el obejtos alumnos
const listado = alumnos.listado();
console.log(listado);
//trae un alumno
const alumno = alumnos.get(1);
console.log(alumno);

/* todos los metodos estan almacenados en un object literal y son usados cuando se crea una instancia*/