export function calcularTotal(cantidad, plazo){
    //cantidades
    //0-1000 = 25%
    //1001-5000 = 20%
    //5001-10000 = 15%
    //+1000 = 10%
    let totalCantidad;
    if(cantidad <= 1000){
        totalCantidad = cantidad * .25;
    }else if(cantidad > 1000 && cantidad <= 5000){
        totalCantidad = cantidad * .20;
    }else if(cantidad > 5000 && cantidad <= 10000){
        totalCantidad = cantidad * .15;
    }else {
        totalCantidad = cantidad * .10;
    }
    //console.log(cantidad);

    //calcular el plazo
    // 3 = 5%
    // 6 = 10%
    // 12 = 15%
    // 24 = 20%
}