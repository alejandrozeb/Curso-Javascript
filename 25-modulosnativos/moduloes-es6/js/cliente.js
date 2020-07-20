/* const nombreCliente= 'alejandro';
let ahorro = 200;
//comunicacion entre archivos js

//de esta forma esta funcion es local de este archivo
function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro ${ahorro}`;
} */

//si queremos exportar estos datos usamos la palabra export

export const nombreCliente= 'alejandro';
export let ahorro = 200;
//comunicacion entre archivos js

//para exportar funciones
export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro ${ahorro}`;
}

export function mostrarNombre(nombre){
    return `Nombre del Cliente: ${nombre}`;
}