let elemento;

elemento = document;
console.log(elemento);
/* selecciona todo el documento */
elemento = document.all;
console.log(elemento);
/* devuelve todos los elementos html */
elemento = document.all[10];
console.log(elemento);
/* tambien se puede selecionar los elemtos como un array */
elemento = document.head;
console.log(elemento);
//devuelve solo el head
elemento = document.body;
console.log(elemento);
/* todo el body */
elemento = document.domain;
console.log(elemento);
/* regresa el dominio */
elemento = document.URL;
console.log(elemento);
/* devuel el protocolo y el puerto  */
elemento = document.forms;
console.log(elemento);
/* devuelve todos los formularios */
elemento = document.forms[0];
console.log(elemento);
/* la misma funcion */
elemento = document.forms[0].id;
console.log(elemento);
/* devuelve le id del form */
elemento = document.forms[0].className;
console.log(elemento);
/* devuelve las clases del elemnto */
elemento = document.forms[0].classList;
console.log(elemento);
/* devuelve las clases */
elemento = document.forms[0].classList[0];
console.log(elemento);
/* devuelce especificamente */
/* class name te devuelve un string y classs list te devuelve como arrays */
elemento = document.images;
console.log(elemento);
/* devuelve todas las imagenes ademas con el id */
elemento = document.images[2];
console.log(elemento);
/* de la misma forma se accede a las imagenes */
elemento = document.images[2].src;
console.log(elemento);
/* te devuelve toda la url */
elemento = document.images[2].getAttribute('src');
console.log(elemento);
/* solo el src */
elemento = document.scripts;
console.log(elemento);
/* ejemplo son  */
console.log('ejemplo-------------');
elemento = document.images;
let imagenes=document.images;//html colecction
let imagenesArr = Array.from(imagenes);
console.log(imagenesArr);
/* de esta forma se puede transformar a arreglos */

imagenesArr.forEach(function(imagen){
    console.log(imagen);
});