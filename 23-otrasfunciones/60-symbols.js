/* symbols */

/* se añadio en las ultimas dversiones de js */
/* es primiteivo de js asi que no es necesario el new */
const simbolo = Symbol();
const simbolo2 = Symbol('descripcion aqui');

console.log(simbolo);
console.log(simbolo2);

/* una caraceristica es que son unicos no osn iguales */

console.log(Symbol() === Symbol()); //le da una cierta propiedad privada

let nombre = Symbol();
let apellido = Symbol();

//crearpersona

let persona={}
persona.nombre = 'Juan'; //aqui solo adicionamos el valors
persona[nombre]= 'Juan'; //para agregar un symbol
persona[apellido]= 'De la torre'; //para agregar un symbol
persona.saldo=100;
persona.tipoCliente='Normal';
//console.log(persona);

console.log(persona[nombre]);//para dvolver el valor de un symbol

//los symbols se consideran propiedades privadas, no pueden ser iterados de forma normal- debe ser con corteches

for(let i in persona){
    console.log(`${i} : ${persona[i]}`);//muestra los atributos de persona pero no los symbols
}