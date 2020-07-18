/* es una lista enlazada pero no tiene duplicados(es como un array pero no se admiten los mismos elementos) */

let carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco 1');
carrito.add('Disco 2');
carrito.add('Disco 3');
carrito.add('Disco 4');
carrito.add('Disco 4');     //no se agrega por que ya existe en el set

console.log(carrito);
console.log(carrito.size);


//para iterar un set

carrito.forEach(producto => console.log(producto)); //mostrando

//iterandocon el index

carrito.forEach((producto,index) => console.log(`${index} : ${producto}`));
//notamos que el index es el valor del producto

//comprobar que un valor existe
//si tiene el elemento
console.log(carrito.has('Camisa'));     //devuelve true
console.log(carrito.has('Guitarra'));   //devuelve false

//para borrar 

carrito.delete('Camisa');
console.log(carrito);
//para limpiar el set
carrito.clear();
console.log(carrito);
//convertir a un array

carrito.add('Camisa');
carrito.add('Disco 1');
carrito.add('Disco 2');
carrito.add('Disco 3');

const arregloCarrito = [...carrito] //los 3 puntos y los corchetes se encargan de convertir
console.log(arregloCarrito);

//otra forma de inicializar un set

let numeros = new Set([1,2,3,4,5,6,9,8,7,1,2,3]);

console.log(numeros);
console.log(numeros.size);