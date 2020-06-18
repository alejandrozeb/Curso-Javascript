/* delegation */

document.body.addEventListener('click', eliminarElemento);
/* detecta cualquir click en todo el body */
/* function eliminarElemento(e){
    e.preventDefault();
    console.log('click!');

    console.log(e.target.classList);
    //devuelve el elemento donde ha sido ingresado el click
}
 */
/* para saber en que card dieron click */

function eliminarElemento(e){
    e.preventDefault();
    console.log('click!');
    //devuelve el elemento donde ha sido ingresado el click
    if(e.target.classList.contains('borrar-curso')){
        console.log(e.target.parentElement.parentElement.remove());
        console.log('Si!');
    }
    if(e.target.classList.contains('agregar-carrito')){
        console.log('curso agregado');//cada vez que se de click a los botones con la clase agregar-carrito
    }else{
        console.log('No!');
    }
    //si da click en el btn borrar curo lanza el mensaje
}