//no es recomendado heredar muchos elemntos
// la composicion es escribir bastantes metodos y agregar al objeto deseado

//Composicion

const obtenerNombre = (info) => ({  //esta es la sintaxis para la composicion y sus metodos
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }

});
//tiene una funcion y decides en qu objetos las vas utilizando
function CLiente(nombre,email,empresa){
    //es como si fuera el ocnstructor en composicion
    let info = {
        nombre,
        email,
        empresa
    }
    //para gregar 
    return Object.assign(           //assing object es una funcion, que es utilizada para unir eel objeto con las funciones que vemos arriba o afuera
        info,
        obtenerNombre(info) //obtener nombre se enlaza al objeto pero al momento de usar las funciones solo sera por su nombre (mostrar nombre)
    )   

}

function Empleado(nombre,email,puesto){
    let info = {
        nombre,
        email,
        puesto
    }
    return Object.assign(
        info,
        obtenerNombre(info)
    )
}

const cliente = CLiente('Juan');
cliente.mostrarNombre();    //usamos mostrar no obtener
const empleado = Empleado('Pedro');
empleado.mostrarNombre();

//de esta forma voy componiendo en mis objetos las funciones que requiero