/* Namespace, es una forma de evitar colisiones con el scope de javasccript, crear un objeto global alrededro de toda la app y agregar toda la funcion y metodos que se puedan acceder de forma global(la idea es darle un nombre unico a la aplicacion)   */
//namespace
const restaurApp = {};
//los platillos
restaurApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25,
    },
    {
        platillo: 'Hamburguesa',
        precio: 20,
    },
    {
        platillo: 'Hot dog',
        precio: 25,
    }
];
//funciones, con space

restaurApp.funciones = {
    ordenar: id => {
        console.log(` tu platillo: ${restaurApp.platillos[id].platillo} se esta preparando`);
    }
}


console.log(restaurApp);
restaurApp.funciones.ordenar(2);

/* se usa librerias y algunas ya tiene nuestras variables por eso se recomienda usar nemaespace */


console.log(restaurApp);