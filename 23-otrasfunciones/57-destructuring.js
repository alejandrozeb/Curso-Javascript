/* destructurin es un codigo que ayuda a extraer valores de un objeto, las desventaja de recorrer objetos es que si el obbjeto es muy grande se crean demasiadas variables */

/* const cliente ={
    nombre : 'Alejandra',
    tipo: 'Premium'
} */
//forma antigua de mostrar los elemtnos de un objeto, tendriamos que mostrar muchas variables

/* let nombre = cliente.nombre,
    tipo = cliente.tipo;

console.log(nombre);
console.log(tipo);
 */
//destructuring
/* se va ir mapeando con la variables que esten en el parentesis y las variables que tengamos en nuestro objeto */

//let {nombre,tipo} = cliente;
/* muestra los datos sin necesidad de emtrar a los atributos */
/* console.log(nombre);
console.log(tipo); */
//solo el nombre
/* let{nombre}= cliente;
console.log(nombre); */

/* variables de scope y destructuring */

/* nombre = 'pedro';
tipo = 'gold'; */
//aunque las variables nombre y tipo esten en el scope global en destrcturing se puede usar variables con el mismo nombre con la siguiente notacion
/* ({nombre,tipo}=cliente);

console.log(nombre);
console.log(tipo);
 */

//como acceder aún objeto dentro de otro objeto
/* 
const cliente = {
    tipo:'Premium',
    nombre: 'Antonio',
    datos: {
        ubicacion:{
            ciudad:'Jalisco',
            pais:'Mexico'
        },
        cuenta: {
            desde: '10-12-2012',
            saldo: 4000
        }
    }
}

console.log(cliente);
//accedemos al subobjeto ubicacion del objeto cliente y lo mostramos 
//datos es el objeto padre
let { datos: {ubicacion}} = cliente;
console.log(ubicacion);
console.log(ubicacion.ciudad);
console.log(ubicacion.pais);

//accediendo al otro subobjeto de datos en cliente
let { datos: {cuenta}} = cliente;
console.log(cuenta);
console.log(cuenta.desde);
console.log(cuenta.saldo); */

//para extraer valores por default

const cliente ={
    nombre: 'Pedro',
    //tipo: 'Premium',
    //saldo : 3000
}
//en caso que no este inicializado el saldo podemos dar un atributo por defecto
let {nombre,tipo='basico',saldo=0}=cliente;

console.log(nombre);
console.log(tipo);
console.log(saldo);
//no crea tipo y saldo en los objetos
console.log(cliente);