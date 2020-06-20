//variables
const listaTweets = document.getElementById('lista-tweets');

//event Listener

eventListener();

function eventListener(){
    //cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    //borrar tweets
    listaTweets.addEventListener('click',borrarTweet);

    //contenido cargado
    document.addEventListener('DOMContentLoaded',localStorageListo);
    //este evento es cuando todo el documento termina de cargarse
    // documetn ready en jquery

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
    //añade el boton de borrar tweet
    li.appendChild(botonBorrar);
    //añade el boton de lista
    listaTweets.appendChild(li);

    //añadir a local storage
    agregarTweetlocalstorage(tweet);

    console.log(tweet);
}

//orenar funciones con eventelistener, eliminando un tweet del dom
function borrarTweet(e){
    e.preventDefault();

    if(e.target.className === 'borrar-tweet'){
            console.log('diste click en el boton x');
            e.target.parentElement.remove();
            alert('tweet eliminado');
    }
}

//mostrar datos del local storage en la lista
//reposicion por el orden de los listener
function localStorageListo(){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet){
        //crear boton
    const botonBorrar= document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText= 'X';

    //crear elementos
    const li = document.createElement('li');
    li.innerText = tweet;
    //añade el boton de borrar tweet
    li.appendChild(botonBorrar);
    //añade el boton de lista
    listaTweets.appendChild(li);
        }
    );

    console.log(tweets);
}

//agregar tweet al local storage

function agregarTweetlocalstorage(tweet){
    let tweets;
     tweets = obtenerTweetsLocalStorage();
    //aañadir el nuevo twwet
    tweets.push(tweet);
    // convertir de json a array
    localStorage.setItem('tweets', JSON.stringify(tweets));
    //agregar a localstorage
   // localStorage.setItem('tweets',tweet); //reescribe 
}
//comprobar que haya elementos en el local storage, retorna un arreglo
function obtenerTweetsLocalStorage(){
    let tweets;
    //revisamos los valores del local storage
    if(localStorage.getItem('tweets')=== null){
        tweets= [];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets')); //te devuelve un arrasy
    }
    return tweets
}

