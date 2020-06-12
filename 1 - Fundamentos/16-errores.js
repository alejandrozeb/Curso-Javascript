/* manejando errores en js */
/* no importa donde llames la funcion */

/* funcion que existe */
try{
    algo();
}catch(error){
    console.log(error);
}finally{//sin error o con error se ejecutara siempre
    console.log('no le importa, ejecuta el codigo');
}
/* se utiliza para algunas funciones que no pueden llegar datos */


function obtenerclientes(){
    console.log('descargando...');
    /* despues de 3 segundos muestra el mensaje */
    setTimeout(function(){
        console.log('completo')
    },3000);
}

obtenerclientes();
/* para descargar */