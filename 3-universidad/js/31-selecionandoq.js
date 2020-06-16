/* queryselector */
/* con selectores de css funcionan */

//const encabezado = document.querySelector('#encabezado');
// usa la sintaxis de css al seleccionar
//console.log(encabezado);
//aplicando csss
/* encabezado.style.background='#333';
encabezado.style.color = "#fff";
encabezado.style.padding = '20px';
encabezado.textContent = 'los mejores cursos'; */
/* query selector puyede seleccionar clases, get by id solo ids */

//const encabezado = document.querySelector('.encabezado');
/* seleccionando la clase */
/* console.log(encabezado);
encabezado.style.background='#333';
encabezado.style.color = "#fff";
encabezado.style.padding = '20px';
encabezado.textContent = 'los mejores cursos'; */
/* los mismos cambios con clases */
/* estos selectores solo devuelven un valor, cuando es clase solo te selcciona el primero */

/* tambien te permite selccionar por etiqueta */
/* const encabezado = document.querySelectorAll('img');
console.log(encabezado); */
/* devuelve todos los elmentos img */

/* const encabezado = document.querySelector('.card img');
console.log(encabezado); */
/* selecciona el primer card y su imagen */

let enlace;
enlace = document.querySelector('#principal a:first-child');
/* con selector de css 3 */
enlace = document.querySelector('#principal a:nth-child(3)');
//enlace = document.querySelector('#principal a:last-child');
console.log(enlace);