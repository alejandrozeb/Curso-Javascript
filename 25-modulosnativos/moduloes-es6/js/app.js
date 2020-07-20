/* comunicacion normal entre dos js */
/* console.log(nombreCliente);
console.log(ahorro);
//comunicacion entre archivos js

const info = mostrarInformacion(nombreCliente,ahorro);
console.log(info); */

/* comunicacion con modulos */

/* para importar variables usamos import ademas de usar en las llaves elnombre de variable que queremos es recomendable para pocas variables */
import{nombreCliente,ahorro} from './cliente.js';

console.log(nombreCliente);
console.log(ahorro);
//comunicacion entre archivos js

//const info = mostrarInformacion(nombreCliente,ahorro);
//console.log(info);

//traer todo el modulo, para traer muchas variables

import * as cliente from './cliente.js';
console.log(cliente)                        //lo trae como objeto