/* metodos de fechas, existe un objeto llamado date*/
/* siemrpe te devuelve la fecha actual */
const diahoy = new Date();
console.log(diahoy);
/* fecha en especifico */
let navidad2017 = new Date('12-25-2017');
console.log(navidad2017);

/* metodos */
let valor;
/* mes te regresa un number comenzando del 0 */
valor=diahoy.getMonth();
console.log(valor);
/*  dia*/
valor=diahoy.getDate();
console.log(valor);
/* dia regresar el valor exacto */
valor=diahoy.getDay();
console.log(valor);
/* el año */
valor=diahoy.getFullYear();
console.log(valor);
/* regresa el minuto de la hora que estamos */
valor=diahoy.getMinutes();
console.log(valor);
/* hora, si tenemos aplicaciones para hacer ejercicio */
valor=diahoy.getHours();
console.log(valor);
/* todos los segundos desde el año 1970 */
valor=diahoy.getTime();
console.log(valor);
/* para realizar cambios */
valor=diahoy.getFullYear();
valor=diahoy.setFullYear(2016);
valor=diahoy.getFullYear();
console.log(valor);
/* para calcular la edad */
let nacimiento= new Date('10-30-1996');
let hoy = new Date();

console.log(hoy.getFullYear()-nacimiento.getFullYear());







