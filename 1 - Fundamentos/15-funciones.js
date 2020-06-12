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