// Cotizador Constructor
// Cada vez que se presione el boton cotizar se lanza la funcion 
function Seguro(marca,anio,tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;

}
//este objeto manejara las view estara vacio al principio pero lo llenaremos con prototypes
//Todo lo que se muestra
function Interfaz(){}

//mensaje que se imprime en el HTML

Interfaz.prototype.mostrarError = function(mensaje, tipo){
    const div = document.createElement('div');

    /* aumentamos estas clases para adicionar el css en el div */
    if(tipo === 'error'){
        div.classList.add('mensaje','error');
    }else{
        div.classList.add('mensaje','correcto');
    }
    div.innerHTML = `${mensaje}`;
    /* inserta un elemento antes de otro */
    formulario.insertBefore(div, document.querySelector('.form-group'));
    /* eliminamos el mensaje despues de un tiempo */
    setTimeout(function(){
        document.querySelector('.mensaje').remove();
    },3000);
}


//event listener

//al realizar el event submit del form
 const formulario = document.getElementById('cotizar-seguro');

 formulario.addEventListener('submit',function (e) {
    e.preventDefault();
    
    //leer la marca seleccionada del select
    const marca = document.getElementById('marca');
    /* seleccionamos el select de marcas en el form */
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    /* selecionamos de la marca el value del cual se hizo la seleccion en el form*/
   // console.log(marcaSeleccionada);

   /* leer el año seleccionado del <select>*/
    const anio = document.getElementById('anio');
    /* en el value sale el año por que lo guarde con el numero de años */
    const anioSeleccionado= anio.options[anio.selectedIndex].value;
    //console.log(anioSeleccionado);

    /* Lee el valor del radio button */
    //para tipo ckeck
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    //console.log(tipo);
    console.log('presionado');

    //Crear instancia de interfaz
    const interfaz = new Interfaz();

    //revisamos que los campos no esten vacios

    if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === ''){
        //Interfaz imprimiendo un error
        //console.log('Faltan datos');

        interfaz.mostrarError('Faltan datos, revisar el formulario y prueba de nuevo','error');
    }else{
        //Instanciar seguro y mostrar interfaz
       // console.log('Todo bien todo Correcto');
    }
 });





/* inicio selec de años */
//Para llenar los select del año

const max = new Date().getFullYear(),
      min = max - 20;//el nummero minimo de años pedido por la empresa

const selectAnios = document.getElementById('anio');
//cpnstruye el elemento para el form select de mayor a menor (de max a min)
for(let i= max; i>min; i--){
    let option = document.createElement('option');
    option.value=i;//le doy el i como value
    option.innerHTML = i;//escribe el i en la etiqueta
    selectAnios.appendChild(option);
}
/* -------fin select--------- */
