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