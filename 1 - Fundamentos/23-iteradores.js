/* iteradores */

const ciudades = ['Londres','New york','Nadid','Paris'];

const ordenes = new Set([123,231,131,102]);
const datos = new Map();

datos.set('nombre','juan');
datos.set('profesion','desarrollador web');
console.log(ciudades);
console.log(ordenes);
console.log(datos);

console.log("------iteradores----");
//entries iterador
//entries a las ciudades
for(let entradas of ciudades.entries()){
    console.log(entradas);
}

/* para set ordenes */

for(let entradas1 of ordenes.entries()){
    console.log(entradas1);
}

/* map datos */

for(let entradas2 of datos.entries()){
    console.log(entradas2);
}
/* 0 es un atributo  y 1 el dato */

console.log("------iteradores values----");
//values iterador
//values a las ciudades
for(let entradas of ciudades){
    console.log(entradas);
}
//muestra los values y esta por defecto
/* para set ordenes */

for(let entradas1 of ordenes.values()){
    console.log(entradas1);
}
//imprime solo valores
/* map datos */

for(let entradas2 of datos.keys()){
    console.log(entradas2);
}
// solo keys

console.log("------iteradores keys----");
//keys iterador
//keys a las ciudades
for(let entradas of ciudades){
    console.log(entradas);
}
//muestra los keys

for(let entradas1 of ordenes.keys()){
    console.log(entradas1);
}
//imprime solo lso keys que valen lo mismo
/* map datos */

for(let entradas2 of datos.keys()){
    console.log(entradas2);
}
console.log("------iteradores deafult----");
/* default */
//keys a las ciudades
for(let entradas of ciudades){
    console.log(entradas);
}

/* set de ordenes */
for(let entradas1 of ordenes){
    console.log(entradas1);
}
/* map datos */

for(let entradas2 of datos){
    console.log(entradas2);
}

console.log("------iteradores string----");

const mensaje='Aprendiendo Javascript';

for(let letra of mensaje){
    console.log(letra);
}

/* iterador para enlaces */

const enlaces = document.getElementsByTagName('a');

for(let enlace of enlaces){
    console.log(enlace.href);
}
/* imprime la etiqueta con el href con el .href imprime solo los enlaces*/