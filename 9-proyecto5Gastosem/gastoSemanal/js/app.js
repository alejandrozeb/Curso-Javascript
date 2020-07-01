/* implementado con ecmac6, Clases */

//Variables

/* regresa el numero del presupuesto si no ingresa devuelve null o vacio */
const presupuestoUsuario = prompt('Cual es tu presupuesto Semanal');
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

//Event Listeners

document.addEventListener('DOMContentLoaded', function(){
    if(presupuestoUsuario === null || presupuestoUsuario === ''){
        window.location.reload();
    }else{
        // Instanciar un presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        console.log(cantidadPresupuesto);
    }
});