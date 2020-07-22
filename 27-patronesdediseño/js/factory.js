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

        html.tipo=tipo;     //en todas se guarda el tipo

        html.mostrar = function(){
            const elemento = document.createElement(this.tipo); //crea el tipo de elemnto
            //damos atributos a cada etiqueta, y agregan el texto
            if(tipo === 'input'){
                elemento.setAttribute('placeholder', this.texto);
            }else if(tipo === 'img'){
                elemento.setAttribute('src', this.texto)
            }else{
                elemento.appendChild(document.createTextNode(this.texto));
            }

            document.querySelector('#app').appendChild(elemento);

        }
        return html;
    }  
    //no sabemos que se va a crear hasta que se crea una instancia en base a  la ejecucion del programa, 
}
//contruimos los objetos
//input
const InputHTML= function(texto){
    this.texto = texto;
}
//Imagen
const ImagenHTML= function(texto){
    this.texto = texto;
}
//heading
const HeadingHTML= function(texto){
    this.texto = texto;
}
//Parrafo
const ParrafoHTML= function(texto){
    this.texto = texto;
}

const sitioweb = new ConstructorSitios();
// almacenar los elementos, guardaremos en un arrau

 const elementosWeb = [];
 //creando los elementos
 elementosWeb.push(sitioweb.crearElemento('Bienvenidos','h1'));
 elementosWeb.push(sitioweb.crearElemento('Bienvenido a mi sitio web','p'));
 elementosWeb.push(sitioweb.crearElemento('logo.svg','img'));
 elementosWeb.push(sitioweb.crearElemento('Conoce más sobre nosotros','h1'));
 elementosWeb.push(sitioweb.crearElemento('Contacto','input'));
 elementosWeb.push(sitioweb.crearElemento('Contactanos en el formulario','h1'));
/* como se puede ver en el array existen tipos de diferentes tipos */

console.log(elementosWeb);


//ejecutamos el mostrar

elementosWeb.forEach(elemento => {
    elemento.mostrar();
});

