/* cuando un evento afecto a otros  elementos como en la cards */

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click',function(e){
    console.log('click en card');
    e.stopPropagation();//evita la propagacion
});
infoCurso.addEventListener('click',function(e){
    console.log('click en infocurso');
    e.stopPropagation();
});
agregarCarrito.addEventListener('click',function(e){
    console.log('click en agregar carrito');
    e.stopPropagation();
});
/* el event bubbling es cuando se da click en un elementos que esta dentro de otros elemento como un card y al realiza el click se propaga a otros elemntos de la misma */