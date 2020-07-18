/* Son listas ordenadas, al igual que los maps */

let cliente = new Map();
//Agregar elementos
// se debe agregar una llave y un valor

cliente.set('nombre','Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente);
//acceder a los valores
console.log(cliente.get('nombre'));
console.log(cliente.get('tipo'));
console.log(cliente.get('saldo'));

//metodos para los maps
// tamaño del map
console.log(cliente.size);
//si queremos comprobar si existe el atributo o llave dentro del map

console.log(cliente.has('nombre'));         //true si esta la llave 
console.log(cliente.has('apellido'));       //false

//para el valor
console.log(cliente.get('nombre'));

//borra un elemento

cliente.delete('nombre');
console.log(cliente);                       //se borro
console.log(cliente.has('nombre'));         //si existe el atributo nombre

//como limpiar el map
cliente.clear();
console.log(cliente);

//para darle propiedades por default al map

const paciente = new Map(
    [['nombre','paciente'],
     ['habitacion','No Definido']] //la llave atributo va a tener no definido
);
 paciente.set('nombre','antonio');
 paciente.set('habitacion',400);
//como en el set no se repiten valores pero se escribe el ultimo 
 paciente.set('habitacion',500);

 //tambien puede ser recorrido por un foreach

 paciente.forEach((datos,index) => console.log(`${index}: ${datos}`));

 console.log(paciente);







