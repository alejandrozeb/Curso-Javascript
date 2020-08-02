// modelo e concurrecia o event loop, En js se tiene un flujo de ejecucion (en default.svg puede verlo con detalles), el stack, queue y el heap.

/* 
el stack: son la tareas que tienen mayor prioridad o que se ejecutan primero.

lo importante con la grafica es que primero se ejecuta lo que se encuentra en el stack luego cuando se vacio el stack el queue
*/

//javascript Event Loop

console.log('Yo me mostraré primero');

console.log('Yo me mostraré segundo');

console.log('Yo me mostraré tercero');

console.log('Yo me mostraré cuarto');

console.log('Yo me mostraré quinto');
// se muetran de arriba para abajo como se espera

/* //agregando un settimeup
console.log('set time');
console.log('Yo me mostraré primero');

setTimeout(function(){//a set time out se le conocce tambien como none blocking significa que no se colocara en el stack si no en el queue
    console.log('Yo me mostraré segundo');
},0);

console.log('Yo me mostraré tercero');

setTimeout(function(){      //deberiamos tener un resultado como el primero
    console.log('Yo me mostraré cuarto');
},0);
console.log('Yo me mostraré quinto'); */

//agregando un promises------------
console.log('promises-------------------');
console.log('Yo me mostraré primero');

setTimeout(function(){
    console.log('Yo me mostraré segundo');
},0);

console.log('Yo me mostraré tercero');

setTimeout(function(){
    console.log('Yo me mostraré cuarto');
},0);

new Promise(function(res){      //se ejecutaa antes que los set timeout por que tienen un job queue, el task queue es el normal que tenemos en la grafica, pero los promises se ejecutan en job queue que tienen una prioridad mas alta que el task queue
    res('yo soy un promise')
}).then(console.log);
console.log('Yo me mostraré quinto');

//Java script en un proceso de un solo hilo, que monitorea el task y el queue para ejecutar las tareas.