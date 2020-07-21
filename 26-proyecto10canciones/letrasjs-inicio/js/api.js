//https://api.lyrics.ovh/v1/artist/title esta es la api que usaremos

export class API{
    constructor(artista,cancion){
        this.artista=artista;
        this.cancion = cancion;
    }

    async consultarAPI(){
        const url = await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`);

        const  respuesta = await url.json();

        return{
            respuesta
        }
    }
}