//variables
const carrito= document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');







//Listeners
cargarEventListeners();

function cargarEventListeners(){
    //dispara cuando se preiona "agregar carrito"
    cursos.addEventListener('click',comprarCurso);
    
}






//funciones
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
    console.log(curso);
}
