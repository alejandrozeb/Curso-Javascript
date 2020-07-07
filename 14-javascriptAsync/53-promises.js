/* nuevo de javascript soportda en versiones de chrome */

//Promises

const esperando = new Promise(function(resolve,reject){ //debes pasar 2 pametros cuenado se cumple y cunado no
    //tiene la caracteristica de que el valor que estamos viendo no esta disponible ahora si no en el futuro
    //se puede cuando esperas informacon de un api ej cunado carga 1 post nohay problema pero cuando carga 100 podriamos validar que los 100 esten
    //simulador
    //esperamos 5seg
    setTimeout(function(){
        resolve('se ejecuto');
    },5000);



    
});

esperando.then(function(mensaje){// va  a esperar a resolve se cumpla y ejecutara este codigo

        console.log(mensaje);
        /* then y resolve estan juntos */
});

/* en que casos usamos promises? cuando leemos 5000 publicaiones de un blog o 1000 imagenes de un api por que no sabemos el tiepo que nos tome leerlos  */
/* en caso de reject */
const aplicarDescuento = new Promise(function(resolve,reject){
    const descuento = false;
    if(descuento){
        resolve('descuento aplicado');
    }else{
        reject ('No se aplico el descuento');
    }
});
aplicarDescuento.then(function(resultado){
    console.log(resultado);
}).catch(function(error){
    console.log(error);
});





/* en caso del reject se tiene que usar cath */