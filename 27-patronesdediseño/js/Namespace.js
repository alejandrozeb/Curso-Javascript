/* Namespace, es una forma de evitar colisiones con el scope de javasccript, crear un objeto global alrededro de toda la app y agregar toda la funcion y metodos que se puedan acceder de forma global(la idea es darle un nombre unico a la aplicacion)   */
//namespace
const restaurApp = {};
//los platillos
restaurApp.platillos = [//es un arreeglo de objetos
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
    //status del platillo o pedir platillo
    ordenar: id => {
        console.log(` tu platillo: ${restaurApp.platillos[id].platillo} se esta preparando`);
    },
    //crea un platillo nuevo
    agregarPlatillo: (platillo, precio) =>{
        const nuevo={
            platillo,
            precio
        }
        restaurApp.platillos.push(nuevo);
    },
    //muetsra el menu
    mostrarMenu: platillos => {
        console.log(`Bienvenido a nuetsro menu`);
        platillos.forEach((platillo, index) => {
            console.log(`${index} : ${platillo.platillo} ${platillo.precio}`);            
        });
    }
}


console.log(restaurApp);


//una de las ventjas de namespace es que se puede aplicar destructuring

const {platillos} = restaurApp; //sacamos con destrcuturing del array retaurApp los platillos.

restaurApp.funciones.mostrarMenu(platillos);
//a partir de ver el menu podemos ordenar
restaurApp.funciones.ordenar(0);

//agregando platillo

restaurApp.funciones.agregarPlatillo('Pastel', 15);
restaurApp.funciones.mostrarMenu(platillos);


/* se usa librerias y algunas ya tiene nuestras variables por eso se recomienda usar nemaespace, es un manejo en estructura  */
/* jquery usa este tipo de patron de diseño */

