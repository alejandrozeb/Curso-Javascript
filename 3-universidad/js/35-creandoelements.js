/* creando elemntos con js */
//crear enlaces

const enlace = document.createElement('a');
/* pasa el elemtno la etiqueta */
//agregamos la clase

enlace.className='enlace';
console.log(enlace);
//agregamos id
enlace.id='nuevo-id';
console.log(enlace);
//atributode href
enlace.setAttribute('href','#');
console.log(enlace);
//añadir texto

//enlace.textContent= 'nuevo enlace';
enlace.appendChild(document.createTextNode('Nuevo elemento'));//segunda forma
console.log(enlace);

/* pasar al document(agregarlo) */

document.querySelector('#secundaria').appendChild(enlace);