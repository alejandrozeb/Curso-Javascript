/* cambiando a clases */









// Cotizador Constructor
// Cada vez que se presione el boton cotizar se lanza la funcion 
class Seguro{
    constructor(marca,anio,tipo){
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;    
    }
    cotizarSeguro (){
        //console.log(informacion);
        // no es necesario guardar en una variable por que ya se guarda en el instancia
       /*  console.log(this.marca);
        console.log(this.anio);
        console.log(this.tipo); */
    
        /* 
            1= americano 1.15
            2 = asiatico 1.05
            3 = europeo 1.35
        */
        let cantidad;
        const base = 2000;
    
        switch(this.marca){
            case '1':
                cantidad = base * 1.15;
                break;
            case '2':
                cantidad = base * 1.05;
                break;
            case '3':
                cantidad = base * 1.35;
                break;
        }
       // console.log(cantidad);
        //leer el año
    
        const diferencia = new Date().getFullYear() - this.anio;
       // console.log(diferencia);
       /* cada año de diferencia hay que reducir el 3% del valor del seguro */
       cantidad -= (diferencia*3)*cantidad/100;
        /* si el seguro es barato se multiplica por 30% mas
            si el seguro es completo se multiplica por 50% más */
    
            if(this.tipo == 'basico'){
                cantidad *= 1.30;
            } else {
                cantidad *= 1.50;
            }
        
       return cantidad;
        
    }

}
//este objeto manejara las view estara vacio al principio pero lo llenaremos con prototypes
//Todo lo que se muestra
class Interfaz{
    //mensaje que se imprime en el HTML
    mostrarMensaje(mensaje, tipo){
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

    mostrarResultado(seguro,total){
        const resultado = document.getElementById('resultado');
        let marca;
        //console.log(seguro);
    
        switch(seguro.marca){
            case '1':
                marca='Americano';
                break;
            case '2':
                marca='Asiatico';
                break;
            case '3':
                marca='Europeo';
                break;
        }
        //crear un div
        const div = document.createElement('div');
        //insertar la información
        //la clase header tiene estilos
        div.innerHTML=`
            <p class='header'> Tu Resumen: </p>
            <p> Marca: ${marca} </p>
            <p> Año: ${seguro.anio} </p>
            <p> tipo: ${seguro.tipo} </p>
            <p> Total: $ ${total} </p>
        `;
        //spinner
        const spinner = document.querySelector('#cargando img');
        spinner.style.display = 'block';
        setTimeout(function(){
            spinner.style.display = 'none';
            resultado.appendChild(div);
        },3000);
       
    }

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

        interfaz.mostrarMensaje('Faltan datos, revisar el formulario y prueba de nuevo','error');
    }else{
        //Limpiar resultados anteriores
        const resultados=document.querySelector('#resultado div');

        if(resultados != null){
            resultados.remove();
        }

        //Instanciar seguro y mostrar interfaz
       // console.log('Todo bien todo Correcto');

       const seguro = new Seguro(marcaSeleccionada,anioSeleccionado,tipo);
      // console.log(seguro);
        //Cotizar el seguro

        const cantidad = seguro.cotizarSeguro(seguro);
        /* despues de obtener la cantidad debemos crear la interfaz */
        interfaz.mostrarResultado(seguro,cantidad);
        interfaz.mostrarMensaje('Cotizando...','exito');
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
