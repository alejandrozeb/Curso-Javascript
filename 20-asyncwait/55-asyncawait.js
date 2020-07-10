/* funciones asincronas, no esta soportado en todos los navegadores nuevo en emascript 7 */

//ASYNC AWAIT

async function obtenerClientes(){
    //requiere un promises
    const clientes = new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve(`Clientes descargados...`);           
        }, 2000);
    })
//simulacion de una consulta por eso el setimeout
    //error o no...
    const error = false;

    if(!error){
        //esta linea va a esperar a que se corra el promises(async await)
        const respuesta = await clientes;
        /* puedes ir deteniedo el codigo */
        return respuesta;
    }else{
        await Promise.reject('Hubo un error...');
    }
}

obtenerClientes()
    .then(res => console.log(res))
    .catch(error => console.log(error));