//-----------variables
const carrito= document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');






//----------Listeners
cargarEventListeners();

function cargarEventListeners(){
    //dispara cuando se preiona "agregar carrito"
    cursos.addEventListener('click',comprarCurso);
    
}






//-------------funciones
//funcion que añade el curso al carrito
function comprarCurso(e){
    e.preventDefault();
    //console.log(e.target.classList);
/* verifica si el elemento del click tiene la clase agregar carrito en este caso esa clase esta en el input de cada card */

//delegation para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')){
        //devuelve el card
        const curso = e.target.parentElement.parentElement;
        //enviamos el surso seleccionado para tomar sus datos
         leerdatosCurso(curso);
    }
}

//lee los datos del curso

function leerdatosCurso(curso){
    const infoCurso ={
        imagen:curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoCurso);
}
function insertarCarrito(curso){
    const row = document.createElement('tr');
    row.innerHTML=`
        <td>
            <img src="${curso.imagen}" width=100 >
        </td>
        <td>
            ${curso.titulo}">
        </td>
        <td>
            ${curso.precio}">
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.imagen}">X</a>
        </td>    
        `;
        listaCursos.appendChild(row);
        /* es un tr con elementos en el td que se agrega al tbody de el carrito */
}
