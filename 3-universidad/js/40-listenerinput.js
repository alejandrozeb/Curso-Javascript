/* eventos en inputs */
const busqueda = document.querySelector('#buscador');
//keydown cada vez que ingresas un caracter, busacdor en directorio para filtros

//busqueda.addEventListener('keydown',obtenerEvento);

//keyup cada vez que sueltas la tecla que presionas
/* busqueda.addEventListener('keyup',obtenerEvento) */

//keypress cada vez que ingresas, (escribiendo)
/* busqueda.addEventListener('keypress',obtenerEvento)

function obtenerEvento(e){
    console.log(busqueda.value);
    document.querySelector('#encabezado').innerText=busqueda.value;
    console.log(`evento : ${e.type}`);//reporta que evento se uso
}
 */

// focus cada vez que se active el textbox
//busqueda.addEventListener('focus',obtenerEvento);
// blur cada vez que haces click afuera del text box, para verificar
//busqueda.addEventListener('blur',obtenerEvento);
// cut cada vezx que alguien corte en donde este el evento
//busqueda.addEventListener('cut',obtenerEvento);

// copy cada vez que alguien copie
/* busqueda.addEventListener('copy',obtenerEvento);*/
//paste cada vez que alguien copie
/* busqueda.addEventListener('paste',obtenerEvento); */
// input cualquier de estos evento,, todos estos eventos
busqueda.addEventListener('input',obtenerEvento);
function obtenerEvento(e){
    console.log(busqueda.value);
    console.log(`evento : ${e.type}`);//reporta que evento se uso
}
// change funciona con select para los cambios
/* busqueda.addEventListener('change',obtenerEvento); */