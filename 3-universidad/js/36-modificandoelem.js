/* modificar en el Dom */
// reemplazar elementos

const nuevoEncabezado= document.createElement('h2');

// agregar un id

nuevoEncabezado.id='encabezado';
nuevoEncabezado.appendChild(document.createTextNode('Los mejores textos'));
console.log(nuevoEncabezado);
/* appemd child toma de referencia el padre(2) y agregas elemtos en este caso un texto */
/* seimpre se debe tomar dos elementos el emento nuevo y el elemento anterior cuando se trata de reemplazar codigo  */

// elemento anterior sera reemplazado

const anterior = document.querySelector('#encabezado');
/* necesitamo pasar al padre como referencia */
const elPadre= document.querySelector('#lista-cursos');
//reemplazando
elPadre.replaceChild(nuevoEncabezado,anterior);
// el replacechild toma dos argumentos el nuevo y luego el viejo
/* verificar el nombre del padre ya sea el id o por la clase */

console.log(anterior.parentElement);