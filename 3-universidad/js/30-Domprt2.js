/* selecionando elemntos especificos */
/* getElemntbyid */

let elemento;

elemento = document.getElementById('hero');
console.log(elemento);
/* seleccionado */
elemento = elemento.id;
console.log(elemento);
/* muestra el id */
elemento = document.getElementById('header').className;
console.log(elemento);
/* seleciona el nombre de la clase que esta en el header */

let encabezado;
encabezado= document.getElementById('encabezado');
console.log(encabezado);
/* selecionamos otra parte */
encabezado= document.getElementById('encabezado').textContent;
encabezado= document.getElementById('encabezado').innerText;
console.log(encabezado);
/* seleccionan el texto */
encabezado= document.getElementById('encabezado');
encabezado.style.background= '#333';
/* cambia el css del encabezado (el background)*/
encabezado.style.color='#fff';
encabezado.style.padding='20px';

encabezado.textContent='Los mejores cursos';
encabezado.innerText= ' los Mejores textos';
