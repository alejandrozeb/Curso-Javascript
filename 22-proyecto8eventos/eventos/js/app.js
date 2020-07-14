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
        console.log(buscnado);
    }else{
        console.log('no hay nada');
    }
} )