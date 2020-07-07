/*  fecth reemplazo a jax*/

document.getElementById('txtBtn').addEventListener('click',cargarTXT);

function cargarTXT(){
    fetch('datos.txt') //carga la fecth api, busca esta url
    .then(function(res){//una conexion
        //te devuelve una respuesta
        //console.log(res);//devuleve un response, tu eliges que hacer con el contenido, tiene funciones para json text...
        //console.log(res.text());//
        return res.text();
    })
    .then(function(data){//tieness los datos
        console.log(data);
        document.getElementById('resultado').innerHTML= data;
    })
    //en error
    .catch(function(error){//es recomendable para debbugear
        console.log(error);
    });
}