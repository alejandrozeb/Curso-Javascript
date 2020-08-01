//This con explicit binding, se utiliza con otra funcion

function persona(el1,el2){
    console.log(`hola soy ${this.nombre} y me gusta el ${el1} y ${el2} `); //no funcionara por que tenemos el objeto separado del objeto
}

const informacion = {
    nombre: 'Juan',
    trabajo: 'Programador'
}

persona(informacion);

//call, es un metodo que existen para todas las funciones, es un metodo que te permite llamar especificando en que contexto esta funcion va a ser utilizada

persona.call(informacion);  //damos el contexto donde se aplicara el objeto persona

//ahora aumentamos un arreglo

const generosMusicales = ['Heavy Metal','Rock'];

persona.call(informacion, generosMusicales);    //no puedes acceder a todos los elementos del arreglo cuando usas call

//explicit binding con call, cuando pasas arreglo debes colocar todas las posiciones
persona.call(informacion, generosMusicales[0],generosMusicales[0]); //cuando usas call con un arreglo debes pasar todos los elemento

//para pasr un arreglo de gran tamaño se usa otra funcion

//explicit binding con .aply, (si toma un arreglo)

persona.apply(informacion, generosMusicales)


//explicit binding .bind es igual a call solo que este crea una nueva funcion

const nuevaFn = persona.bind(informacion, generosMusicales[0],generosMusicales[0]);

nuevaFn();