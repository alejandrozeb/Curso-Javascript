/* traversing otra forma de manejar el css, recorrer los elementos con conceptos de padre e hijo, no se puede ir del hijo al padre en css (selectors)  */

const navegacion = document.querySelector('#principal');
console.log(navegacion.childNodes);
/* devuelve todo el nav con el id principal, con los nodos(devuelve 0 son los espacio y el numero) */
console.log(navegacion.nodeName);
console.log(navegacion.children[0].nodeName);
/* devuelve los elementos sin los textos, nodename devuelve el nombre del nodo  */
console.log(navegacion.children[0].nodeType);
/* devuelve el numero 1 
1=elementos
2=atributos
3= text node
8=comentarios
9= documentos
10 = doctype
*/
console.log(navegacion.children[0].textContent='nuevo enlace');
console.log(navegacion.style.background='red');
/* tambien se pude realizar cambios de css accediendo a las etiquetas*/
/* ejemplos */

const barra = document.querySelector('.barra');

console.log(barra.children[0].children[0].children);
/* se puede entrar a todos los elemnetos aninados como listas usando esta sintaxis */

const cursos = document.querySelectorAll('.card');

console.log(cursos);
/* devuelve todas las cards */
console.log(cursos[0].lastElementChild);
console.log(cursos[0].firstElementChild);
console.log(cursos[0].childElementCount);
/*  accede a ultimo y al primer elemneto y cuenta los elementos */