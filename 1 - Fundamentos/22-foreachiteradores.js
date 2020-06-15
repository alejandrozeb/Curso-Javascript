/* estrucutra pra recoger arreglos foreach */

const pendientes=['Tarea','Comer','Proyecto','Aprender','Javascript'];

for (let i = 0;i < pendientes.length; i++){
    console.log(`${pendientes[i]}`);
}
console.log("------------foreach-------------");
/* con foreach */
/* en function se debe colocar en singular, forma simple de mostrar un array*/
pendientes.forEach(function(pendiente) {
    console.log(`${pendiente}`);
});
/* para mostrar el index, te devuelve el index */

pendientes.forEach(function(pendiente, index) {
    console.log(`${index} ${pendiente}`);
});

/* map para recorrer un arreglo de objetos */
console.log("------------Map-------------");

const carrito = [
      {id:1, producto:'libro'},
      {id:2, producto:'Camisa'},
      {id:3, producto:'Guitarra'},
      {id:4, producto:'libro'},      
];

console.log(carrito);

/* para recorrer mostrando todos los objetos*/

const nombreProducto = carrito.map(function(carrito){
    return carrito.producto;
});
console.log(nombreProducto);

  /* un objeto con for */

  const automovil={
      modelo:'camaro',
      motor: 6.1,
      anio: 1969,
      marca: 'Chevrolet'
  }

for(let auto in automovil){
    console.log(`${auto}: ${automovil[auto]}`);
}

/* auto es el atributo y los datos al lado */
