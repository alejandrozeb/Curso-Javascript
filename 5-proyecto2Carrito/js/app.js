//-----------variables
const carrito= document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');




//----------Listeners
cargarEventListeners();

function cargarEventListeners(){
    //dispara cuando se preiona "agregar carrito"
    cursos.addEventListener('click',comprarCurso);
    //cuando se elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso);
    //al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);

    //al cargar el documento leer local storage

    document.addEventListener('DOMContentLoaded', leerLocalStorage);
    
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
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>    
        `;
        listaCursos.appendChild(row);
        /* es un tr con elementos en el td que se agrega al tbody de el carrito */
        //guardar curso local storage
        guardarCursoLocalStorage(curso);
}
//Elimina el curso del carrito del DOM
function eliminarCurso(e){
    /* e para poder acceder a prevent */
    e.preventDefault();
    let curso,cursoId;
    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        curso=e.target.parentElement.parentElement;
        cursoId=curso.querySelector('a').getAttribute('data-id');
        //console.log(cursoId);
    }
    /* delegation es lo mas usado en esta seccion */
    
    //console.log('eliminado');
    eliminarCursoLocalStorage(cursoId);
}

//elimina los cursos del carrito en el dom

function vaciarCarrito(){
    //foma lenta
   // listaCursos.innerHTML= '';
    //return false
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }
    //vaciarlocalstorage
    vaciarLocalStorage();

    return false;
}

//almacena cursoso en el carrito a local storage

function guardarCursoLocalStorage(curso){
    let cursos;
    //toma el valor del localstorage
    cursos = obtenerCursosLocalStorage();
    //el curso seleccionado se agrega al arreglo
    cursos.push(curso);

    localStorage.setItem('cursos',JSON.stringify(cursos));
}
//compruba que haya elementos en el localstorage
function obtenerCursosLocalStorage(){
    let cursosLS;
    //comprobamos si hay algo en el localStorage
    if(localStorage.getItem('cursos') === null){
        cursosLS = [];
    }else{
        cursosLS =JSON.parse( localStorage.getItem('cursos'));
    }
    return cursosLS;
}

//imprime los cursoso de local storage en el carrito

function leerLocalStorage(){
    let cursosLS;
    cursosLS=obtenerCursosLocalStorage();
   // console.log(cursosLS);
    cursosLS.forEach(function(curso) {
        //construir template
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
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>    
            `;
            listaCursos.appendChild(row);
    });
   
}

//elimina el curso por el id de local storage

function eliminarCursoLocalStorage(curso){
    //console.log(curso);
    //obetensmos el arreglo de curosos
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();
    //iteramos comparando el id del curso con el array de localStorage
    cursosLS.forEach(function(cursoLS,index){
        //console.log(curso.id);
        if(cursoLS.id === curso){
                cursosLS.splice(index,1);
        }
    });
    //añadimos el array actual a storage
    localStorage.setItem('cursos',JSON.stringify(cursosLS));
}

function vaciarLocalStorage(){
    localStorage.clear();
}