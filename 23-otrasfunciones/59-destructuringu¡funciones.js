// en funciones se usa mas destructuring

//destructuring forma anterior

/* function reservacion(completo,opciones){
    opciones=opciones ||{}; //opciones sera un objeto

    //console.log(opciones);

    let metodo= opciones.metodoPago,
        cantidad= opciones.cantidad,
        dias= opciones.dias;

        //para mostrar cada elemento

        console.log(metodo);
        console.log(cantidad);
        console.log(dias);
}

//llamando a la funcion

reservacion(true,{
    metodoPago: 'Tarjeta',
    cantidad: 2000,
    dias: 3
}); */

//destructuring forma nueva

/* function reservacion(completo,opciones){
        let{metodoPago,cantidad,dias}=opciones; //se mete a las opciones y va mostrando ademas deben llevar el mismo nombre
           
        //para mostrar cada elemento

        console.log(metodoPago);
        console.log(cantidad);
        console.log(dias);
}

//llamando a la funcion

reservacion(
    true,//la reservacion  se hizo
    {
    metodoPago: 'Tarjeta',
    cantidad: 2000,
    dias: 3
});
 */
//destructuring forma nueva cono valores por default

function reservacion(completo,
        {
            metodoPago='efectivo',
            cantidad=0,
            dias=0 
        } = {}
    )//termina los parentesis de inicio de la funcion
    { //aqui comienza la funcion

        if(completo){
            console.log('Proceder a reservar...')
        }else{
            console.log('Abandonar');
        }
    console.log(metodoPago);
    console.log(cantidad);
    console.log(dias);
}

//llamando a la funcion
//si enviamos sin datos
reservacion(
false,//la reservacion  se hizo
{

});
//si enviamos con datos
reservacion(
    true,//la reservacion  se hizo
    {
     metodoPago: 'tarjeta',
     cantidad:5000,
     dias: 5
    });
//si mandamos vacio ya tiene valores por default