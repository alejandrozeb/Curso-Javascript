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

    }
    //imprimir categorias
    imprimirCategorias(){
        const listaCategorias = eventbrite.obtenerCategorias();
    }

}