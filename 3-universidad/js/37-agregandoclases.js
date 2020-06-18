/* agregando y quitando elementos */
const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');
//enlaces[0].remove();
console.log(enlaces);
/* borra el primer enlace */
navegacion.removeChild(enlaces[0]);
console.log(enlaces);
/*eliminando desde el padre */

/* para borrar  clases */
const primerLi = document.querySelector('.enlace');
console.log(primerLi);
let elemento;

//obetenr una clase de css

elemento=primerLi.className;
elemento=primerLi.classList.add('nuevaclase');
elemento = primerLi.classList;
//se agrego una nueva clase
elemento=primerLi.classList.remove('nuevaclase');
elemento = primerLi.classList;
console.log(elemento);

/* con atributos */
elemento = primerLi.getAttribute('href');//ayuda a obtener el valor
console.log(elemento); //deuelvela respuesta
primerLi.setAttribute('href', 'http://facebook.com');
primerLi.setAttribute('data-id','20');
elemento = primerLi.hasAttribute('data-id');//verifica que el elemento tiene el atributo data-id
console.log(elemento);
primerLi.removeAttribute('data-id');

elemento=primerLi;

console.log(elemento);
