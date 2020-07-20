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

//importando otro archivo
console.log('--------------Usando dos modulos en app----------------');
//importando la empresa
import{nombreEmpresa,ahorro as ahorroEmpresa, categoria,mostrarInformacion as mostrarInformacionEmpresa,Empresa} from './empresa.js';

console.log(nombreCliente);
console.log(nombreEmpresa); 

//sale error si no usamos el as en el import por que tienen el mismo import
/* console.log(ahorro);
console.log(ahorro); */

console.log(ahorro);
console.log(ahorroEmpresa);
console.log(categoria);

console.log(info);

const infoEmpresa = mostrarInformacionEmpresa(nombreEmpresa,ahorroEmpresa,categoria);

console.log(infoEmpresa);

//esa es la ventaja de los alios evita la colision de nombres entre modulos


//usando el extends

let empresa = new Empresa(nombreEmpresa,ahorroEmpresa,categoria);

console.log(empresa);
//utilizar el metodo mostrar
console.log(empresa.mostrarInformacion());