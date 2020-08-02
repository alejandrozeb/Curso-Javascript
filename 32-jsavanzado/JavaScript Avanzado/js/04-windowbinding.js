//Window binding

function obtenerAuto(){
    console.log(`Mi auto es color ${this.color}`);//no pasamos ningun valor
}

const color = 'Negro';//undefined

obtenerAuto();  //sale undefined, por que no sabe como relacionarlo con el color

window.color='Negro';
//PRIMERO llama por los valores si no encuentra empieza a buscar por metodos como call aply finalmente lo busca por window si lo encuentra lo llega a imprimir
obtenerAuto();

// si no pasa los valores, implicitamente o explicitamente lo buscara en el window