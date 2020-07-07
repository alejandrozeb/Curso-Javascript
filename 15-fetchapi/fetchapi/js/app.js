/*  fecth reemplazo a jax*/

document.getElementById('txtBtn').addEventListener('click',cargarTXT);
document.getElementById('jsonBtn').addEventListener('click',cargarJSON);

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

function cargarJSON(){
    fetch('empleados.json')//pasa la url
    .then(function(res){
        return res.json();
    })
    .then(function(data){
       // console.log(data);//como usamos .json se hace el proceso para pasarlo como array

       //lo mostramos con un forecah
       let html= '';
       data.forEach(function(empleado) {
        html += `
            <li>${empleado.nombre} ${empleado.puesto}</li>
        `;
       });
       document.getElementById('resultado').innerHTML = html;
    })
    .catch(function(error){//es recomendable para debbugear
        console.log(error);
    });
}