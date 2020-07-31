/* nuevas funciones a partir de emaScript10 */
const edades = [8,10,9, 11, [13,18, 20, [18,20,21]]];

console.log(edades);

console.log(edades.flat(1));        //aplana el array, el numero va depender del nivel al que quieres entrar

console.log(edades.flat(2)); 

console.log(edades.flat(Infinity)); //agarra todos los que existan

