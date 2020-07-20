/* comunicacion normal entre dos js */
/* console.log(nombreCliente);
console.log(ahorro);
//comunicacion entre archivos js

const info = mostrarInformacion(nombreCliente,ahorro);
console.log(info); */

/* comunicacion con modulos */

/* para importar variables usamos import ademas de usar en las llaves elnombre de variable que queremos es recomendable para pocas variables */
import{nombreCliente,ahorro,mostrarInformacion,mostrarNombre,Cliente} from './cliente.js';

console.log(nombreCliente);
console.log(ahorro);
//comunicacion entre archivos js

const info = mostrarInformacion(nombreCliente,ahorro);
console.log(info);

const mostrarNombreCliente= mostrarNombre(nombreCliente);

console.log(mostrarNombreCliente);

//Utilizamos la clase Cliente de cliente.js
let cliente = new Cliente(nombreCliente,ahorro);
console.log(cliente);
console.log(cliente.mostrarInformacion());

//traer todo el modulo, para traer muchas variables

import * as cliente1 from './cliente.js';
console.log(cliente1)                        //lo trae como objeto

//para usar debe preceder el nombre del alias
console.log(cliente1.nombreCliente);
console.log(cliente1.ahorro);

let cliente2 = new cliente1.Cliente(cliente1.nombreCliente,cliente1.ahorro);
console.log(cliente2);
console.log(cliente2.mostrarInformacion());