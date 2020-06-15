/* window devuelve todos los valores de la pantalla
en innerwtgh y height te devuelve el ancho y largo, 
faceebok usan estos valores para publicidad*/

/* consolo.log(); funcionan en el navegador */

/* alert() tambien forma parte del window object */
//Prompt

/* const nombre = prompt();
console.log(`Bienvenido ${nombre}`);  */
/* desplaza una ventana emergente */

// confirm
/* if(confirm('Eliminar?')){
    console.log('Eliminar ');
}else{
    console.log('nada paso');
} */
/*  */

let altura,
    anchura;

    altura = window.outerHeight;
    anchura = window.outerWidth;
/* todo el navegaador */
altura = window.innerHeight;
anchura = window.innerWidth;

console.log(altura);
console.log(anchura);
/* se recomienda hacer en css */

/* se puede acceder a un hots */
let ubicacion;
ubicacion= window.location;

 console.log(location);
 /* si deseas verficar la seguridad */
 /* para redireccionar */

/*  window.location.href='http://twitter.com'; */

/* para ver el historial */
window.history.go(-3);
/* hacia atras*/

/* navigator */

ubicacion= window.navigator;
/* diferentes propiedades */
ubicacion= window.navigator.appVersion;
ubicacion= window.navigator.language;

console.log(ubicacion);

/* informacion relevante de los objetos */

