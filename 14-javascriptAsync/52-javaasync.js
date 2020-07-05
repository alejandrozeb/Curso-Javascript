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

//simularemos que traemos de una api con settime o una bd

function mostrarPaises(){
    setTimeout(function(){
        let html= '';
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`;
        });
        document.getElementById('app').innerHTML=html;
    },1000);
}
//Mostrar los paises
mostrarPaises();