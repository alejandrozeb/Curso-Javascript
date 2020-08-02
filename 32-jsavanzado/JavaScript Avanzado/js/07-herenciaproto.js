//herencia de javascript via prototype

function PlayList(nombre){
    this.nombre = nombre;
}
//PARA AÑADIR METODOS

PlayList.prototype.play = function(){
    console.log(`Reproduciendo la playlist ${this.nombre} `);
}

PlayList.prototype.eliminar = function(){
    console.log(`Eliminando la playlist ${this.nombre} `);
}

//***herencia */

function Cancion(nombre,genero){
    //la forma que puedes heredar es la siguiente
    PlayList.call(this, nombre);
    //luego pasas lo que es unico
    this.genero= genero;
}
//const cancion = new Cancion('Nothing else matters', 'Heavy Metal');

//cancion.play();//sale que  no es una funcion, es por que no heredamos aun los prototypes
//heradar los metodos

Cancion.prototype = Object.create(PlayList.prototype);// esto es una forma de clonar un objeto, significa que vamos a clonar un objeto playlist en el prototipe de cancion

//luego recien realizamos la instancia

const cancion = new Cancion('Nothing else matters', 'Heavy Metal');
cancion.play();

const playList = new PlayList('Rock');  //nueva instancia de Playlist
playList.play();

//esto es herencia via playlist este tipo de forma en algunos casos llega a ser un problema, ahora se esta empezando a usar la composicion