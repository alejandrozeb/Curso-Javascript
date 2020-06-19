//variables
const listaTweets = document.getElementById('lista-tweets');

//event Listener

eventListener();

function eventListener(){
    //cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    //borrar tweets
    listaTweets.addEventListener('click',borrarTweet);

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