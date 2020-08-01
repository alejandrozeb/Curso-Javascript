/* This, permite reutilizar funciones con diferente contexto, ademas hace referencia a una variables o un objeto que sea ejecutado */

function persona(nombre){
    console.log(`hola soy ${nombre}`);
}

persona('Juan');

//diferentes formas de hacer referencia al this

//Implicit Binding

//This con Implicit binding

const usuario = {
    nombre: 'Juan',
    edad: 20,
    presentacion(){
        //console.log(`Mi nombre es ${nombre} y tengo ${edad}`);    esta mal, sale que es undefined nombre y edad
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);    //this hace referencia a los atributos nombre y edad en el contexto de la funcion(ejemplo de implicit binding) 
    },
    mascota: {
        nombre: 'Hook',
        edad: 1,
        presentacion(){
            console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`); 
        }
    }
}

usuario.presentacion(); //
usuario.mascota.presentacion();

//this, tambien es una forma de hacer refencia al objeto que se esta usando.
