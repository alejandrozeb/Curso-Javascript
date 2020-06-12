/* funciones */
/* sirven para solucionar pequeños problemas */

//function declaracion
function saludo(){
    console.log('Hola Alejandro');
}
/* froma de llamar a una funcion */
saludo();

/* pasando parametros */
function saludo2(nombre){
    console.log(`hola ${nombre}`);
}
saludo2('Alma');
saludo2('Pablo');
saludo2('Carolina');

/* con mas parametros */

function sumar (a,b){
    console.log(a+b);
}
sumar(1,2);
sumar(3,4);

/* funciones que retornan un valor */

function sumar2(a,b){
    return a+b;
}

let suma;
suma=sumar2(1,2);
suma=sumar2(3,4);
suma=sumar2(1,6);

console.log(suma);

/* parte 2 */
/* cuando no ingresas los datsos o son erroneos en cadenas te devuelve undefined acompañado de el mensaje y en numeros nan, pero se pude definir valores por defecto */

function saludar(nombre='visitante'){
    //if(typeof nombre === 'undefined'){nombre='Pablo'} froma vieja

    return `hola ${nombre}`;
}
saludo = saludar();
console.log(saludo);
/* function expression */
const suma4= function(a=3,b=4){
    return a+b;
} 

console.log(suma4(1,2));
console.log(suma4(5));
/* otro tipo de funciones IIFE */
/*  se llaman solas  */
(function(tecnologia){
    console.log(`creando un IIFE en ${tecnologia}`);
})('javascript');

/* metodos de propiedad, cuando una funcion se pone destro de este objeto */

const musica={
    reproducir: function(id){
        console.log(`reproduciendo cancion id ${id}`);
    },
    pausar:function(){
        console.log(`Pause a la musica`);
    }

}

/* los metodos tambien se pueden agregar afuera del objeto */
musica.borrar=function(id){
    console.log(`Borrando la cancion con id: ${id}`);
}

musica.reproducir(30);
musica.pausar();
musica.borrar(2);
