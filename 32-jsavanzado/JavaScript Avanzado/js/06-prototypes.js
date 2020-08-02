//prototypes y clases

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
//se añade al prototype
const playList = new PlayList('Rock');
const playList2 = new PlayList('Punk 90');


console.log(playList);
console.log(playList2);

playList.play();
playList2.play();
playList.eliminar();
playList2.eliminar();

//ahora se realizan con clases