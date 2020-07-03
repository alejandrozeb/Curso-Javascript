
/* para crear un objetoen JSON deben ser comillas dobles , el ultimo no debe llevar coma*/

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