// funcion clasica

let aprendiendo = function(){
    console.log('Aprendiendo Java');
}

//aprendiendo();

// con arrow function
 aprendiendo = () => {
     console.log('Aprendiendo Javascript');
 }

 //aprendiendo();
 //el resultado es el mismo, no es necesario colocar la palabra funcion

 // si es una linea no requiere llaves
 aprendiendo = () => console.log('Aprendiendo Javascript');
 //aprendiendo();
 //retorna el valor sin console log
 aprendiendo = () => 'Aprendiendo Javascript';
//console.log(aprendiendo());

//retorna objeto
aprendiendo = () => ({aprendiendo: 'Aprendiendo Javascript'});
//console.log(aprendiendo());

//pasar paremetros
aprendiendo = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);

aprendiendo('Javascript');

//pasando un parametro el paentesis es opcional
aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`);

aprendiendo('Javascript es lo maximo');
//cuando pasas ma de uno es necesario los parentesis
aprendiendo = (tech1,tech2) => console.log(`aprendiendo ${tech1} y ${tech2}`);

aprendiendo('Javascript','ES6');

//con constantes, callback

const productos = ['Disco','Camisa','Guitarra'];

/* const letrasProductos = productos.map(function(producto){
    return producto.length;
});
console.log(letrasProductos); *///devuelve el tamaño de cada cadena en el array producto

/* callback con arrow function */

const letrasProductos = productos.map(producto=> producto.length);
/* la misma funcion, con array function */
 console.log(letrasProductos);

 //en un foreach

 productos.forEach(function(producto) { 
        console.log(producto);     
 });

 /* con array function */
 console.log('Con array function');
 productos.forEach(producto => console.log(producto));






