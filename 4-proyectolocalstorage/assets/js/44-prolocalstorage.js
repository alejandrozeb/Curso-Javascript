//variables
const listaTweets = document.getElementById('lista-tweets');

//event Listener

eventListener();

function eventListener(){
    //cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);
}

//Funciones

function agregarTweet(e){
    e.preventDefault();
    //leer el valor del text area
    const tweet = document.getElementById('tweet').value;
    //Crear boton de eliminar tw
    const botonBorrar= document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText= 'X';

    //crear elementos
    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(botonBorrar);
    listaTweets.appendChild(li);

    console.log(tweet);
}