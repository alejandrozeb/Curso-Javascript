class API{
    async obtenerDatos(){
        //obtner los datos

        //para obtener un numeros de paginas de respuesta
        const total = 100;     
        const datos = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);

        //retornar los datos como json

        const respuestaJSON = await datos.json();

        return {
            respuestaJSON
        }
    }
}