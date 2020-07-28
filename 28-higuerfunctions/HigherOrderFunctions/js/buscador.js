// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;        //genera 10 años a partir del año actual
//los añade a la vista
for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function obtenerAutos(){
    return [
            {
                marca: 'BMW',
                modelo: 'Serie 3',
                year: 2012,
                precio: 30000,
                puertas: 4,
                color: 'Blanco',
                transmision: 'automatico'
            },
            { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
            {
                marca: 'Ford',
                modelo: 'Mustang',
                year: 2015,
                precio: 20000,
                puertas: 2,
                color: 'Blanco',
                transmision: 'automatico'
            },
            { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
            {
                marca: 'BMW',
                modelo: 'Serie 5',
                year: 2016,
                precio: 70000,
                puertas: 4,
                color: 'Rojo',
                transmision: 'automatico'
            },
            {
                marca: 'Mercedes Benz',
                modelo: 'Clase C',
                year: 2015,
                precio: 25000,
                puertas: 4,
                color: 'Blanco',
                transmision: 'automatico'
            },
            {
                marca: 'Chevrolet',
                modelo: 'Camaro',
                year: 2018,
                precio: 60000,
                puertas: 2,
                color: 'Rojo',
                transmision: 'manual'
            },
            { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
            {
                marca: 'Dodge',
                modelo: 'Challenger',
                year: 2017,
                precio: 40000,
                puertas: 4,
                color: 'Blanco',
                transmision: 'automatico'
            },
            { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
            {
                marca: 'Dodge',
                modelo: 'Challenger',
                year: 2012,
                precio: 25000,
                puertas: 2,
                color: 'Rojo',
                transmision: 'manual'
            },
            {
                marca: 'Mercedes Benz',
                modelo: 'Clase C',
                year: 2018,
                precio: 45000,
                puertas: 4,
                color: 'Azul',
                transmision: 'automatico'
            },
            {
                marca: 'BMW',
                modelo: 'Serie 5',
                year: 2019,
                precio: 90000,
                puertas: 4,
                color: 'Blanco',
                transmision: 'automatico'
            },
            { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
            {
                marca: 'Dodge',
                modelo: 'Challenger',
                year: 2015,
                precio: 35000,
                puertas: 2,
                color: 'Azul',
                transmision: 'automatico'
            },
            {
                marca: 'BMW',
                modelo: 'Serie 3',
                year: 2018,
                precio: 50000,
                puertas: 4,
                color: 'Blanco',
                transmision: 'automatico'
            },
            {
                marca: 'BMW',
                modelo: 'Serie 5',
                year: 2017,
                precio: 80000,
                puertas: 4,
                color: 'Negro',
                transmision: 'automatico'
            },
            {
                marca: 'Mercedes Benz',
                modelo: 'Clase C',
                year: 2018,
                precio: 40000,
                puertas: 4,
                color: 'Blanco',
                transmision: 'automatico'
            },
            { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
        ];        
}

//Datos para la busqueda
//ser aobjeto estatico donde ejecutaremos los cambios de nuetro buscador

let datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertos: '',
    transmision: '',
    color: ''
}
//rescribiremos el objeto,  sus valores van a depender de nuestro buscador



//event listenner DOM loaded
const autos = obtenerAutos();

document.addEventListener('DOMContentLoaded',() => {
    mostrarAutos(autos);
});

//event Listener para el formulario

const marca= document.querySelector('#marca');
marca.addEventListener('input', e => {
    //console.log('something change');

    //console.log(e.target.value);    // forma para arrow function
    datosBusqueda.marca=e.target.value; //llenamos nuestro objeto

    //manda ññamr la funcion de filtrar autos
    filtrarAuto();
});

//para year
const year= document.querySelector('#year');
year.addEventListener('input', e => {
      datosBusqueda.year=Number(e.target.value); //llenamos nuestro objeto, ademas convertimos a numeo
    //manda ññamr la funcion de filtrar autos
    filtrarAuto();
});
//minimo
const minimo= document.querySelector('#minimo');
minimo.addEventListener('input', e => {
      datosBusqueda.minimo=Number(e.target.value); //llenamos nuestro objeto, ademas convertimos a numeo
    //manda ññamr la funcion de filtrar autos
    filtrarAuto();
});
//maxiom
const maximo= document.querySelector('#maximo');
maximo.addEventListener('input', e => {
      datosBusqueda.maximo=Number(e.target.value); //llenamos nuestro objeto, ademas convertimos a numeo
    //manda ññamr la funcion de filtrar autos
    filtrarAuto();
});
//
const puertas= document.querySelector('#puertas');
puertas.addEventListener('input', e => {
    datosBusqueda.puertas=Number(e.target.value); //llenamos nuestro objeto

    //manda ññamr la funcion de filtrar autos
    filtrarAuto();
});
//transmision
const transmision= document.querySelector('#transmision');
transmision.addEventListener('input', e => {
    datosBusqueda.transmision=e.target.value; //llenamos nuestro objeto

    //manda ññamr la funcion de filtrar autos
    filtrarAuto();
});
//color
const color= document.querySelector('#color');
color.addEventListener('input', e => {
    datosBusqueda.color =e.target.value; //llenamos nuestro objeto

    //manda ññamr la funcion de filtrar autos
    filtrarAuto();
});

function limpiarHTML(){
    //leer el elemnto resultado

    const contenedor = document.querySelector('#resultado');
    //limpiar los resultados anteriores
     while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
     }
     //remueve todos los elemntos del contenedor
}

function mostrarAutos(autos){
    limpiarHTML();
    //leer el elemnto resultado
    const contenedor = document.querySelector('#resultado');
     
    //contruir el html de los autos
    autos.forEach(auto => {
        //console.log(auto);
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML=`
            <p> ${auto.marca} ${auto.modelo} - ${auto.year} - Puertas: ${auto.puertas} - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color} </p>
        `;
        contenedor.appendChild(autoHTML);
    });
}

function filtrarAuto(){
    //console.log('desde filtrar auto');
    //higuer function es tomar una funcion y que su argumento sea otra funcion

    const resultado = obtenerAutos().filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);   //vamos atraer tod el arreglo
    //console.log(resultado);

    if(resultado.length){
        mostrarAutos(resultado);//muestra si hay resultados
    }else{
        //alert('no hay resultado');  //sale mensaje si no hay resultados
        noResultado();
    }

}

//No resultado
function noResultado(){
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');//ya tiene estilos
    noResultado.appendChild(document.createTextNode('No hay resultados'));
    document.querySelector('#resultado').appendChild(noResultado);

}
//accede a todo el arreglo por el filter y lo va comparando
function filtrarMarca(auto){
    if(datosBusqueda.marca){
       // console.log(auto);
        //console.log(datosBusqueda.marca);
        return auto.marca === datosBusqueda.marca; //devuelve al filter para su uso
    }else{
        return auto;    //retornamos para tener valores en el DOM
    }
}
//filter para el año
function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year; //devuelve al filter para su uso
    }else{
        return auto;
    }
}
//filtarr minimo
function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo; //devuelve al filter para su uso
    }else{
        return auto;
    }
}
//filtarr maximo
function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo; //devuelve al filter para su uso
    }else{
        return auto;
    }
}
//filtarr puertas
function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas; //devuelve al filter para su uso
    }else{
        return auto;
    }
}

//filtrarTransmision

function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision; //devuelve al filter para su uso
    }else{
        return auto;
    }
}
//filtrar color
function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color; //devuelve al filter para su uso
    }else{
        return auto;
    }
}