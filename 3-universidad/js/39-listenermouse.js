/* mas eventos con el mouse */
//variables 

const encabezado= document.querySelector('#encabezado');
const enlaces = document.querySelector('.enlace');
const boton = document.querySelector('#vaciar-carrito');
//click
//boton.addEventListener('click', obtenerEvento);
/* function obtenerEvento(e){
    console.log(`evento : ${e.type}`);//reporta que evento se uso
} */
//doble click
/* boton.addEventListener('dblclick', obtenerEvento);
function obtenerEvento(e){
    console.log(`evento : ${e.type}`);//reporta que evento se uso
} */
//mouse enter solo arriba del botn
/* boton.addEventListener('mouseenter', obtenerEvento);
function obtenerEvento(e){
    console.log(`evento : ${e.type}`);//reporta que evento se uso
} */

//mouseleave, cuando sales del boton
/* boton.addEventListener('mouseleave', obtenerEvento);
function obtenerEvento(e){
    console.log(`evento : ${e.type}`);//reporta que evento se uso
} */
//mouseover, arriba dl boton
/* boton.addEventListener('mouseover', obtenerEvento);
function obtenerEvento(e){
    console.log(`evento : ${e.type}`);//reporta que evento se uso
} */
//mouseout
/* boton.addEventListener('mouseout', obtenerEvento);
function obtenerEvento(e){
    console.log(`evento : ${e.type}`);//reporta que evento se uso
} */
//mousedown cuando presionas
/* boton.addEventListener('mousedown', obtenerEvento);
function obtenerEvento(e){
    console.log(`evento : ${e.type}`);//reporta que evento se uso
} */
//mouseup cuando sueltas de presionar
/* boton.addEventListener('mouseup', obtenerEvento);
function obtenerEvento(e){
    console.log(`evento : ${e.type}`);//reporta que evento se uso
} */
//mousemove registra los movimientos sobre un elemento
encabezado.addEventListener('mousemove', obtenerEvento);
function obtenerEvento(e){
    console.log(`evento : ${e.type}`);//reporta que evento se uso
}