/* Factory es un patron de diseño para la creacion de objetos, te ayuda a crear objetos similares pero no sabes de que tipo van a ser*/

function ConstructorSitios(){   //funciona en factory, prototypes,clases,funciones
    this.crearElemento =   function(texto,tipo){
        let html;
        
        if(tipo === 'input'){
            html = new InputHTML(texto);    //va a crear un objeto de tipo inputHTML
        }else if(tipo === 'img'){
            html = new ImagenHTML(texto);
        }else if(tipo === 'h1'){
            html = new HeadingHTML(texto);
        }else if(tipo === 'p'){
            html = new ParrafoHTML(texto);
        }
        //nota que los elemeento son similares por que son etiquetas html

        return html;
    }  
    //no sabemos que se va a crear hasta que se crea un instancia en base a  la ejecucion del programa, 
}

const HeadingHTML= function(texto){
    this.texto = texto;
}

const sitioweb = new ConstructorSitios();
// almacenar los elementos, guardaremos en un arrau

 const elementosWeb = [];
 elementosWeb.push(sitioweb.crearElemento('Bienvenidos','h1'));







console.log(elementosWeb);




