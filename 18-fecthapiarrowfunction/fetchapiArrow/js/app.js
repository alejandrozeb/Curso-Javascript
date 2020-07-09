
document.getElementById('txtBtn').addEventListener('click',cargarTXT);
document.getElementById('jsonBtn').addEventListener('click',cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarRest);

function cargarTXT(){
    fetch('datos.txt') 
    .then(res => res.text())
    .then(data =>document.getElementById('resultado').innerHTML= data)
    .catch(error => console.log(error));
}

function cargarJSON(){
    fetch('empleados.json')
    .then(res => res.json())
    .then(data =>{
       let html= '';
       data.forEach(function(empleado) {
        html += `
            <li>${empleado.nombre} ${empleado.puesto}</li>
        `;
       });
       document.getElementById('resultado').innerHTML = html;
    })
    .catch(error => console.log(error));
}
//cargar desde una rest api
function cargarRest(){
    fetch('https://picsum.photos/list')
    .then(res => res.json())
    .then(imagenes =>{ 
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
    .catch(error => console.log(error));
}