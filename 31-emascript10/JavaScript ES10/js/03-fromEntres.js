/* este es un map */

const map = new Map([ 
    ['nombre', 'Producto 1'], 
    ['precio', 20] 
]);

//fromentres, te permite crear un objeto de una serie de llaves y valores
console.log(map);
console.log('-------------objeto----------');
/* cambia a un objeto */
const objeto = Object.fromEntries(map);
console.log(objeto);

delete objeto.precio;  //usando metoos de objetos
console.log(objeto);

console.log(map);
map.delete('precio');
console.log(map);

// se puede aplicar en un set y en un map, siempre y cuando tenga llave y valor
