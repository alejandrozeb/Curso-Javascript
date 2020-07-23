/* singleton, factory, builder esta direccionado a la creacion de objetos, Observer esta direccionado a un patron de comportamiento */

//Observer, tambien se le conoce como suscriptor-publicador

//ejemplo de oferta
let observer = {
    //se suscribe a la oferta
    obtenerOfertas : function(callback){
        if(typeof callback ==="function"){  //en caso que sea una funcion ejecutamos el codigo
            this.subscribers[this.subscribers.length] = callback;
        }
    },
    //si se quiere salir de la suscripcion
    cancelarOfertas: function(callback){
        for(let i=0; i < this.subscribers.length; i++){
            if(this.subscribers[i] === callback){
                delete this.subscribers[i];
            }
        }
    },
    //publica ofertas a las personas que se suscribieron
    publicarOferta: function(callback){
        for(let i=0; i < this.subscribers.length; i++){
            if(typeof this.subscribers[i] === 'function'){
                 this.subscribers[i];
            }
        }
    },
    //creamos las persoonas que venden(observers)
    crear: function(objeto){
        for(let i in this){//lo que este en este objeto{
            if(this.hasOwnProperty[i]){
                objeto[i] = this[i];
                objeto.subscribers = [];    //se vuelva un arreglo
            }
        }
    }

}


//creando vendedores o publicadores

const udemy = {
    nuevoCurso: function(){
        const curso = 'Un nuevo curso de Javascript!';
        this.publicarOferta(curso);
    }
}
const facebook = {
    nuevoAnuncio: function(){
        const oferta = 'Compra un celular';
        this.publicarOferta(oferta);
    }
}

//crear los publicadores
observer.crear(udemy);
observer.crear(facebook);
