/* no tiene relacion con el tema de modulos que vimos anteriormente */

/* el module es uno de los mas comunes de los patrones de diseño  */

/* module es una forma de crear llaves publicas y privadas en otros lenguajes se puede ver como public, protected, en js no existe este tipo de manejo pweo ai formas de simular, funciones que se convocan automaticamente cmo el ifi*/

const comprarBoleto = (function(){

    //privado
    let evento = 'Conferencia JS 2019';
    let precio = 200;

    //funciones
    
    const adquirirBoleto = () => {
        const elemento = document.createElement('p');
        elemento.textContent= `Comprando boleto para: ${evento}`;
        document.querySelector('#app').appendChild(elemento);

    }

    //Publico

    return{
        mostrarBoleto: function(){

            adquirirBoleto();       //solo el metodo estara disponible y no los elementos
/*             console.log(evento);
            console.log(precio);        //se muestran */ 
        }
    }
})();
//esta es una forma de encapsular nuestro codigo
//console.log(evento);    //en el console sale, evento is not defined(Por el encapsulamiento que limita ifi)

//debemos llamar al metodo mostrarBoleto
comprarBoleto.mostrarBoleto();
//console.log(precio);    //en el console sale, evento is not defined

/* Esta la forma para poder encapsular tus datos aveces para evitar la repeticion de varibles o dar seguridad a los datos */

console.log(comprarBoleto.evento); //no puede ser accedido