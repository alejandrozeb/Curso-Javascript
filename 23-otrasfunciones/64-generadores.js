/* generadores */
/* es una funcion que retorna un iterador es mas facil de usar que un generador*/

//sintaxis
//el * indica que es un genrador

function *crearGenerador(){
    //nuevo de emac 6
    
    //podemos usar los tipo de datos primitivos normales
    yield 1;
    yield 'Nombre';
    yield 3+3;
    yield true;
    
}

const iterador = crearGenerador();

console.log(iterador.next().value);     //el next es 
console.log(iterador.next().value);      
console.log(iterador.next().value);      
console.log(iterador.next().value);            
console.log(iterador.next().value);     //retorna undefined         

//generador que recorrera un arreglo

function *nuevoGenerador(carrito){
    for(let i=0; i < carrito.length; i++){
        yield carrito[i];                  // va a crear en el yield
    }
}

//creamos el carrito

const carrito=['Producto 1','Producto 2','Producto 3', 'Producto 4'];

//recorremos el iterador

let iterador2 = nuevoGenerador(carrito);


console.log(iterador2.next().value);      //el done es como el fin del ejemplo de iteradores    
console.log(iterador2.next().value);
console.log(iterador2.next().value);
console.log(iterador2.next().value);
console.log(iterador2.next().value);