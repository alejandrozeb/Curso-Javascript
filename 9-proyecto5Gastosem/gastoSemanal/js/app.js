/* implementado con ecmac6, Clases */

//Variables

/* regresa el numero del presupuesto si no ingresa devuelve null o vacio */
const presupuestoUsuario = prompt('Cual es tu presupuesto Semanal');
const formulario = document.getElementById('agregar-gasto');
let ccantidadPresupuesto;
//Clases
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto= Number(presupuesto);
        this.restante = Number(presupuesto);
    }
    //metodo para ir restando del presupuesto actual
    // 0 va como default
    presupuestoRestante(cantidad=0){
        return this.restante -= Number(cantidad);
    }

}

//clase interfaz maneja todo lo relacionado con el Html

class Interfaz{
    insertarPresupuesto(cantidad){
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        //Insertar html
        /* Inserta la cantidad en el spna de presupuesto y restante */
        presupuestoSpan.innerHTML=`${cantidad}`;
        restanteSpan.innerHTML=`${cantidad}`;
    }
    imprimirMensaje(mensaje,tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }
        divMensaje.appendChild(document.createTextNode(mensaje));
        //insertar el dom despus del h2
        document.querySelector('.primario').insertBefore(divMensaje,formulario);

        //Quitar el alert despues de 3 segundos

        setTimeout(function(){
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        },3000);
    }
}

//Event Listeners
/* cuando el documento carga */
document.addEventListener('DOMContentLoaded', function(){
    if(presupuestoUsuario === null || presupuestoUsuario === ''){
        window.location.reload();
    }else{
        // Instanciar un presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        /* verifica si el numero es de tipo num o otro tipo de variable */
        if(isNaN(cantidadPresupuesto.presupuesto)){
            window.location.reload();
        }else{
            console.log(cantidadPresupuesto);
        //Instanciar la clase de Interfaz

        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);


        }
        
    }
});
/*cuando se envia el formulario de gasto y cantidad  */
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    //console.log('enviado');
    //leer del formulario de gastos

    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;

    //instanciar la interfaz
    const ui = new Interfaz();

    if(nombreGasto === '' || cantidadGasto === ''){
        //console.log('hubo un error');
        //dos parametros: mensaje y tipo
        ui.imprimirMensaje('Hubo un error', 'error');
    }else{

        console.log('el gasto se agrego');
    }
});