//to string, es una funcion que retorna un string que hace referencia a una funcion o un objeto

function sumar(a,b){
    //retorna la suma de dos numeros
    return a+b;
}

console.log(sumar.toString());

function Automovil(modelo,color){
    this.modelo = modelo;
    this.color = color;
}

const auto = new Automovil('Camaro', 'Negro');

console.log(auto);

console.log(auto.toString());//devuelve object object

//reescribiendo el prototype

Automovil.prototype.toString = function autoString(){
    const datos = `Auto: ${this.modelo} y color: ${this.color}`;
    return datos;
};
const auto2 = new Automovil('Camaro', 'Negro');
console.log(auto2.toString());  //se puede usar para recibir datos o debbugear , tambien para el cuerpo de la libreria si usas una
