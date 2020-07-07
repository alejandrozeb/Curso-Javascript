/*  fecth reemplazo a jax*/

document.getElementById('txtBtn').addEventListener('click',cargarTXT);
document.getElementById('jsonBtn').addEventListener('click',cargarJSON);
document.getElementById('apiBtn').addEventListener('click', cargarRest);

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
//cargar desde una rest api
function cargarRest(){
    fetch('https://picsum.photos/list')
    .then(function(res){
        //console.log(res);//tarda unos segundo en cargar la informacion

        return res.json();
    })
    .then(function(imagenes){ //devuelve todo
        //console.log(imagenes);//mostramos los datos en console

        let html= '';
        imagenes.forEach(function(imagen) {
            html += `
                <li>
                    <a target="_blank" href="${imagen.post_url}"> Ver imagen
                    </a>
                      ${imagen.author}              
                </li>
            `;
        });//podemos ver la foto en unplash

        document.getElementById('resultado').innerHTML = html;

    })
}