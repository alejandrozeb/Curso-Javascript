//con clases
class Playlist{
    constructor(nombre){
        this.nombre = nombre;
    }
    play(){
        console.log(`Reproduciendo la playlist ${this.nombre} `)
    }
    eliminar(){
        console.log(`Eliminando la playlist ${this.nombre} `);
    }
    //al copilarse se lelga al mismo punto del prototype es una abstraccion de realizar prototypes
}

//las instancias son iguales
const playList = new PlayList('Rock');
const playList2 = new PlayList('Punk 90');


console.log(playList);
console.log(playList2);

playList.play();
playList2.play();
playList.eliminar();
playList2.eliminar();