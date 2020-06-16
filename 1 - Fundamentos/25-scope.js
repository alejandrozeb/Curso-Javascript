/* scope em javascript es la visibilidad de una variable
global o privada o disponibilidad */

var a = 'a';
let b= 'b';
const c = 'c';

console.log('Globales ' + a,b,c);
/* Son variables globales por que no estan adentro de ninguna fucion o procedimiento, su scope es global */

function funcionscope() {
    var a = 'A';
    let b= 'B';
    const c = 'C';
    console.log('Funcion: ' + a,b,c);
}

funcionscope();
/* el scope de estas variables es local, se puede notar al realizar la instancia de las variables */
//scope de bloque

if (true) {
    var a = 'AA';
    let b= 'BB';
    const c = 'CC';
    console.log('Bloque: ' + a,b,c);  
} 
/* los tipo var sono reescrito en el if en las {} pero los tipo let y const se mantienen */
console.log('Globales ' + a,b,c);

//for
/* cambia el var */
for (var a = 0; a <10; a++) {
    console.log(a);
 }
 console.log('Globales ' + a,b,c);
/* se puede ver como let no se modifica */
 for (let b = 0; b <10; b++) {
    console.log(b);
 }
 console.log('Globales ' + a,b,c);