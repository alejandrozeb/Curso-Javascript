let nombre,mensaje;
nombre='Juan Pablo';
//concatenar

mensaje='Java'+'Script';

//uniendo variables en una sola
let aprendiendo = 'Aprendiendo',
    tecnologia = 'JavaScript';

/* console.log(`${aprendiendo} ${tecnologia}`); */
//length cuenta el nuero palabraas de la cadena/
console.log(tecnologia.length);
/* para concatenar */
console.log(tecnologia.concat(' ','es genial'));
/* para mayusculas */
console.log(tecnologia.toUpperCase());
console.log(tecnologia.toLocaleLowerCase());
/* para buscar en cadena si no la encuentra devuelve -1 */
mensaje='Aprendiendo javascript, css, html para ser frontend';
console.log(mensaje.indexOf('javascript'));
/* busca la posicion y la corta la porcion */
console.log(mensaje.substring(0,11));
/* busca con numeros negativos para hacerlo al reves */
console.log(mensaje.slice(-11));
/* divide la cadena en un array dependiendo del atributo  */
console.log(mensaje.split(' '));
/* reemplaza la cadena */
console.log(mensaje.replace('css','php'));
/* devuelve un valor booleano al encontrar la palabra */
console.log(mensaje.includes('css'));
/* para repetir */
console.log(tecnologia.repeat(10));