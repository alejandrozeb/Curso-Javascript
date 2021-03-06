/* https://randomuser.me/ usar la api esta caida uinames */
document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

function cargarNombres(e){
    /* Cada vez que usemos un submit vamos a necesitar un prevent default */
    e.preventDefault();
    //console.log('si');
    // se realizara con ajax

    const origen = document.getElementById('origen');
    /* para extraer datos del select */
    origenSeleccionado = origen.options[origen.selectedIndex].value;
   // console.log(origenSeleccionado);

   const genero = document.getElementById('genero');
   /* para extraer datos del select */
   generoSeleccionado = genero.options[genero.selectedIndex].value;
  // console.log(generoSeleccionado);

  const cantidad = document.getElementById('numero').value;
 // console.log(cantidad);

  let url='';
  url += 'http://uinames.com/api/?';
    //si hay un origen agregarlo a la url
  if(origenSeleccionado != ''){
    /* ? se complementa */
    url += `?region=${origenSeleccionado}&`;
    /* & añade otro */
  }
  //si hay genero agregarlo a la url
  if(generoSeleccionado != ''){
    url += `gender=${generoSeleccionado}&`;
  }
  // si hay una cantidad
  if(cantidad != ''){
    url += `amount=${cantidad}&`;
  }
 
  
 // console.log(url);

  //conectar con ajax
  // Inciar xmlhttp
  
  const xhr = new XMLHttpRequest();
  // abrimos la conexion
  xhr.responseXML('get',url, true);
  // datos e impresion del template
  xhr.onload = function(){
    if(this.status === 200){
        //console.log(this.responseText);
        JSON.parse(this.responseText);
        const nombre = JSON.parse(this.responseText);
        //generar html

        let htmlNombres = '<h2> Nombres Generados </h2>';

        htmlNombres += '<ul class="lista">';

        //imprimir cada nombre

        nombres.forEach(function(nombre) {
              htmlNombres= `
                <li> ${nombre.name}
              `;  
        });



        htmlNombres += '</ul>';

        document.getElementById('resultado').innerHTML= htmlNombres;
    }
  }

  //enviar el request
  xhr.send();


  

}