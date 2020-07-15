//controlador

const eventbrite = new EventBrite();
const ui = new Interfaz();

//lsitenner al bucador

document.getElementById('buscarBtn').addEventListener('click', (e) =>{
    e.preventDefault();
   // console.log('presionando');

    //leer el texto del input buscar

    const textoBuscador = document.getElementById('evento').value;

    //leer el select

    const categorias = document.getElementById('listado-categorias');//selecciono el listado
    const categoriaeleccionada = categorias.options[categorias.selectedIndex].value;//saco del select el value

    console.log(textoBuscador);
    console.log(categoriaeleccionada);

    //revisar que haya algo escrito en el buscador

    if(textoBuscador != ''){//verifico si esta vacio
        //cuando si hya busqueda
        //console.log('buscando ...');

        eventbrite.obtenerEventos(textoBuscador, categoriaeleccionada).then(eventos => {
            //console.log(eventos);
            if(eventos.eventos.events.length > 0){
                /* si hay eventos, mostrar el resultado */

                ui.mostrarEventos(data.eventos);


            }else{
                /* no hay eventos enviar una alerta*/
                ui.mostrarMensaje('No hoya resultados', 'alert alert-danger mt-4');
            }
        })

    }else{
        //console.log('no hay nada');
        //Mostrar mensaje para que imprima algo
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
    }
} )