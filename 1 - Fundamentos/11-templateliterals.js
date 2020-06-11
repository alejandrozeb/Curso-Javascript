const producto1='Pizza',
      precio1=30,
      producto2='hamburguesa',
      precio2=40;

/* forma vieja de hacer un html */
 
/* let html;
html='<ul>'+    
     '<li>Precio: ' + producto1 + '</li>'+
     '<li>Precio: ' + precio1 + '</li>'+
     '<li>Precio: ' + producto2 + '</li>'+
     '<li>Precio: ' + precio2 + '</li>'+
     '<li>Total: ' + (precio1+precio2) + '</li>'+
     '<ul>';
     
document.getElementById('app').innerHTML = html; */
/* forma de enviar al dom (para que salga en el navegador) selleccionas la etiqueta*/

/* con templates literals nueva forma */

html= `
    <ul>
        <li>Orden: ${producto1} </li>
        <li>Precio: ${precio1} </li>
        <li>Orden: ${producto2} </li>
        <li>Precio: ${precio2} </li>
        <li>Orden: ${total(precio1,precio2)} </li>
    </ul>
`

function total(precio1,precio2){
    return precio1 + precio2;
}
/* es importante usar estas comillas `` */
/* para acceder a las variables solo es necesario $() sin necesidad de usar el + */





document.getElementById('app').innerHTML = html;