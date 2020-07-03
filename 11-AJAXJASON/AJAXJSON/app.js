
/* para crear un objetoen JSON deben ser comillas dobles , el ultimo elemento no debe llevar coma, cunado tienes mas objetos se usa [] aplica la regla de la coma tambien para los objetos*/

//Variables

const boton1 = document.getElementById('boton1');

boton1.addEventListener('click', function(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'empleado.json',true);

    xhr.onload = function(){
        if(this.status === 200){
            //devuelve un objeto
            //console.log(JSON.parse(this.responseText));
            const persona = JSON.parse(this.responseText);

            const htmlTemplate= `
                <ul>
                    <li>ID: ${persona.id} </li>
                    <li>Nombre: ${persona.nombre} </li>
                    <li>Empresa: ${persona.empresa} </li>
                    <li>Actividades: ${persona.trabajo} </li>
                </ul>
            `;
            document.getElementById('empleado').innerHTML=htmlTemplate;
            /* agreag el objeto a la pantalla */
        }
    }
    xhr.send();
});


const boton2 = document.getElementById('boton2');
boton2.addEventListener('click', function(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'empleados.json',true);

    xhr.onload = function(){
        if(this.status === 200){
            //devuelve un objeto
            //console.log(JSON.parse(this.responseText));
            const personal = JSON.parse(this.responseText);
            //console.log(personal);
            let htmlTemplate='';
            personal.forEach(function(persona) {
                htmlTemplate +=`
                <ul>
                    <li>ID: ${persona.id} </li>
                    <li>Nombre: ${persona.nombre} </li>
                    <li>Empresa: ${persona.empresa} </li>
                    <li>Actividades: ${persona.trabajo} </li>
                </ul>
            `;
            /* va seguir con persona porque enviamos ese atributo con + concatenamos */
            })
            document.getElementById('empleados').innerHTML = htmlTemplate;
            /* agregamos los objtos concatenados en el view */
            
            
        }
    }
    xhr.send();
});