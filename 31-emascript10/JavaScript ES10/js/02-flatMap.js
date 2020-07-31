/* flatmap, tenemos un arreglo con objetos */

const productos = [
    { nombre: 'Producto 1', precio: 20},
    { nombre: 'Producto 2', precio: 30},
    { nombre: 'Producto 3', precio: 40}
];

//flat map mapea un elemnto y devuelve un arreglo, como si fuera un map y un flat al mismo tiempo

const resultado = productos.map(producto =>[producto.nombre, producto.precio]);
//crea tres arrays con  el producto y el valor
console.log(resultado);
console.log(resultado.flat(1)); //crea un array con los objetos

//hace lo mismo pero en una sola linea
const resultado1 = productos.flatMap(producto =>[producto.nombre, producto.precio]);

console.log(resultado1);