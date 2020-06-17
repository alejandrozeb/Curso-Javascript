/* traversing de hijo a padre */

const enlaces = document.querySelectorAll('.enlace');
console.log(enlaces[0].parentElement);
console.log(enlaces[0].parentNode);
/* devuelve un nivel arriba de tu posicion se recomienda usar parentElement  */
console.log(enlaces[0].parentElement.parentElement.parentElement);
/* puedes ir tan arriba como te lo permita el dom */
const cursos = document.querySelectorAll('.card');
/* ejemplo */
console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent='traversing hasta aqui');
/* ejemplo de aplicacion de traversing */

/*  siling otra forma de navegar*/

const enlaces1= document.querySelectorAll('.enlace');
console.log(enlaces1[4].previousSibling);
/* te duevlve un texto en blanco  */
console.log(enlaces1[4].previousElementSibling);
/* este si devuelve el elemnto anterior,los sibling son lo que estan dentro de etiquetas como el nav o el footer */

console.log(enlaces1[4].previousElementSibling.previousSibling);


console.log(enlaces1[0].nextElementSibling.nextElementSibling);
/* devuelve los siguientes */

console.log(enlaces1[0].nextElementSibling.nextElementSibling.parentElement.children[4]);
/* navegacion ejemplo */




