/* on click con javascript */
/* event listener click al buscador */
//alert('un alert');
/* document.querySelector('#submit-buscador').addEventListener('click',function(e){
    e.preventDefault();//detiene la accion por default y seguira los pasos de la funcion ej verificar datos

    alert('buscando cursos');
}); */
/*  action =# es una accion por default, en form es enviar el formulario*/
/* con una funcion aparte */

document.querySelector('#submit-buscador').addEventListener('click',ejecutarBoton);

function ejecutarBoton(e){
    e.preventDefault();
    let elemento;
    elemento=e;//muestra el elemtno del mouse, como la posicion
    elemento=e.target;//devuelve el elemento desde donde se realizo el click
    elemento=e.target.id;
    elemento=e.target.className;
    elemento=e.target.innerText;//devuelev el texo de la etiqueta
    console.log(elemento);


   // console.log('desde la funcion ejecuta el boton');
}

document.querySelector('#encabezado').addEventListener('click',function(e){
    e.target.innerText='Nuevo encabezado';

    console.log(e.target.innerText);//con e se accede a los elemetos
});