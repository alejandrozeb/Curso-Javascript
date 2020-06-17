/* seleccion multiple en javascript */
/* let enlaces=document.getElementsByClassName('enlace');

console.log(enlaces); */
/* las etiquetas a tienen la clase enlace, devuelve todas las etiquetas que tienen estas clases*/
/* let enlaces1= document.querySelector('.enlace');
console.log(enlaces1); */
/* te devuelve solo un enlace como vimos en el anterior modulo  */
/* enlaces = enlaces[0];
console.log(enlaces); */
/* te devuelve un a en el array */
/* enlaces=document.getElementsByClassName('enlace')[3];
enlaces.style.background='#333';
enlaces.textContent = 'Nuevo enlace';
console.log(enlaces); */
/* igual se modifica el css pero se debe selelcionar con la primera linea */

/* se puede mezclar queryselector y get element */

/* const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');
console.log(listaEnlaces); */
/* --- */
/* const links = document.getElementsByTagName('a');
console.log(links); */
/* te devuelve una collecion de todos los elementos con la etiqueta a, igual aplica los cambios al css */
/* links[18].style.color = 'red';
links[18].textContent = 'Nuevo enlace'; */


//como arreglo
/* let enlaces = Array.from(links);
enlaces.forEach(function(enlace){
    console.log(enlace.textContent);
}); */
/* se debe respetar el singular y el plural, retorna todo los textos */
/* const links1 = document.getElementsByTagName('h1');
console.log(links1); */
/* igual puede devolver todos los resultados */
/* se recomienda usar los id */

/* parte 2 --------------- */
/* otra forma de seleccionar */
//let enlaces = document.querySelectorAll('#principal .enlace');
//console.log(enlaces);
/* te devuelve un node de los elemnetos */
//enlaces[1].style.background='red';
/* igual se pueden aplicarlos cambios al css */

const enlaces = document.querySelectorAll('#principal a:nth-child(odd)');

enlaces.forEach(function(impares){
    impares.style.backgroundColor='red';
    impares.style.color='white';
});
/* transforma el backround los imaoares del arreglo de enlaces en red  */

console.log(enlaces);

/* ir descomentando por bloque, arreglare para un mejor manejo mas adelante */
