/* callback en foreach */

const ciudades = ['Londres','New York','Madrid','Paris','Viena'];
//este en un callback sencillo llamado
//inline callback por que no tiene nombre
//se recomienda que los callbacks sean inline, sin nombre 
ciudades.forEach(function(ciudad){
    console.log(ciudad);
});
console.log('********funcion definida callback*********');
//con funcion definida
function callback(ciudad){
    console.log(ciudad);
}
ciudades.forEach(callback);

/* otro ejemplo */
/* si cargas desde una rest api */

const paises=['Francia','España', 'Portugal', 'Australia', 'Inglaterra','Irlanda'];
//se ejecutara despues
function nuevoPais(pais,callback){
    setTimeout(function(){
        paises.push(pais);
        callback();//es como si llamaramos a la funcion mostrar paises
    },2000);
}

//simularemos que traemos de una api con settime o una bd
//los paises se muestran despues de un segundo
function mostrarPaises(){
    setTimeout(function(){
        let html= '';
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`;
        });
        document.getElementById('app').innerHTML=html;
    },1000);
}

//agregar nuevo pais
nuevoPais('Alemania',mostrarPaises);

//Mostrar los paises
mostrarPaises();


/* no se muestra alemania por que la peticion nuevo pais se ejecuta despues en tiempo de mostrar paises */
/* funciones en cadena */