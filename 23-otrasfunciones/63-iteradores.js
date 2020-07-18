/* Iteradores, te da mas control */

/* for(let i = 0 ; i< 10; i++){
    console.log(i);
} */

function crearIterador(carrito){
    //Inicializamos el indice
    let i=0;   
    return{
        siguiente: () => {                                  //este  es un metodo de crearIterador
            let fin = (i >= carrito.length);                //preguntamos si el fin es maoyr al tamaño del carrito

            let valor = !fin ? carrito[i++] : undefined;    //añadimos al valor un dato y si carrito ya no tiene mandamos un undefuned

            return {
                fin: fin,               //retornamos el true o false
                valor:valor             //retornamos el valor
            }
        }
    }
}

const carrito = ['Producto 1','Producto 2','Producto 3','Producto 4'];

const  recorrerCarrito = crearIterador(carrito);

//este iterador te permite ir paso a paso
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());   //aqui el fin se pone en true y pasa undefined

/* la ventaja de usar un iterador es que puede controlar que pasa en cada iteracion */
