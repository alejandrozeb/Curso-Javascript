// ver los errores, pueden ser errores de conexiones

try {
    throw new Error('algo salio mal');
}catch(error){
    console.log(error);
}

//try catch mejorado


try {
    throw new Error('algo salio mal');
}catch{
    console.log('Hubo un error bastante grave...'); //podemos usar nuestros propios errores
}