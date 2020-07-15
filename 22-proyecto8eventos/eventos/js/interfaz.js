/* creamos el view */
class Interfaz{
    constructor(){
        //inicializa la app al instanciar
        this.init();
        //leer el resultado, seleccionando donde insertaremos los eventos

        this.listado = document.getElementById('resultado-eventos');
    }

    //metodo para cuando inicialize la app

    init(){
        //llamar a imprimir categorias de la rest api
        this.imprimirCategorias();
    }
    //imprimir categorias
    imprimirCategorias(){
        const listaCategorias = eventbrite.obtenerCategorias()
        .then(categorias => {
            const cats = categorias.categorias.categories;

            //seleccionar el select de categorias

            const selectCategoria = document.getElementById('listado-categorias');

            //recorrmos el arreglo e imprimir los option

            cats.forEach(cat => {
                const option = document.createElement('option');
                option.value = cat.id;
                option.appendChild(document.createTextNode(cat.name_localized));
                selectCategoria.appendChild(option);
            });
        })
    }
    //lee la respuesta de la api e imprime los resultados
    mostrarEventos(eventos){
        //leer los eventos y agregarlos a un variable
        const listaEventos = eventos.events;

        listaEventos.forEach(evento => {
            this.listado.innerHTML+=`
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid mb-2" src="${evento.logo !== null ? evento.logo.url : ''}">         
                        </div>

                        <div class="card-body>
                            <div class="card-text">
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p class="lead text-info"> Informacion del evento </p>
                                <p>${evento.description.text.substring(0,200)}...</p>

                                <span class="badge badge-primary"> Capacidad: ${evento.capacity}</span>
                                <span class="badge badge-secondary">Fecha y hora: ${evento.start.local} </span>
                                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
                            </div>
                        </div>    
                        
                    </div>
                </div>
            `;
        });

    }

    //limpia los resultados previos

    limpiarResultados(){
        this.listado.innerHTML='';
    }


    //metodo para imprimir mensajes: 2 parametros, mensaje y clases

    mostrarMensaje(mensaje,clases){
        //creamos un div
        const div = document.createElement('div');
        //agregando las clases
        div.classList = clases;
        //agregando el texto
        div.appendChild(document.createTextNode(mensaje));
        //buscar un padre
        const buscadorDiv = document.querySelector('#buscador');
        //añadimos el div
        buscadorDiv.appendChild(div);
        //quitar el alert despues de 3 segundos

        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);

    }

    //desparece le mensaje en caso que exista

    limpiarMensaje(){
        const alert = document.querySelector('.alert');
        //en caso que exista un alert en la vista

        if(alert){
            alert.remove();
        }

    }

}