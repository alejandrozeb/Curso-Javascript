//

//const ciudades= ['Londres', 'New York', 'Madrid', 'Paris'];
//para extraer cuidades
/* const [
    primeraCuidad,
    segundaCiudad
] = ciudades;
 */
 //para sacar un elemnto en la posicion
//destructuring mapea el elemento
/*  const [,,ciudad,paris] = ciudades;
console.log(paris);
console.log(ciudad); */

//el array con un objeto

/* const ciudades= ['Londres', 'New York', 'Madrid', 'Paris',{
    idioma: 'ingles'
}];

console.log(ciudades);
//recordar que destructuring mapea el elemneto por eso el ',' para llegar al ultimo elemento
[,,,,idioma]=ciudades;

console.log(idioma); */

//ejemplo avanzado

const cliente ={
    tipo: 'premium',
    saldo: 3000,
    datos: {
        nombre: 'Pedro',
        apellido: 'Perez',
        residencia:{
            ciudad: 'Mexico'
        }
    },
    movimientos: ['12-03-2018','12-03-2017','12-03-2016']
}
//debemos ir primero al objeto padre para acceder a sus datos(residencia)
let {
    tipo,
    datos,
    datos: {residencia},
    //movimientos,
    movimientos : [uno,dos]
}=cliente;

console.log(datos);
console.log(datos.nombre);

console.log(residencia);

//console.log(movimientos);
//para imprimir solo uno

console.log(uno,dos);