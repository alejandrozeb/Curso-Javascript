//Heredar los prototipos

function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}


//Prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo}`;
}

const cliente1 = new Cliente('Pedro',100);
console.log(cliente1.nombreClienteSaldo());

// Banca para empresas

function Empresa(nombre,saldo,telefono,tipo){
   //Estos atributos se repiten entonces los vamos heredar de el objeto cliente  
/*     this.nombre = nombre;
    this.saldo = saldo; */
    Cliente.call(this,nombre,saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}
/* Forma de heredar un prototype, */
Empresa.prototype = Object.create(Cliente.prototype);
/* Esta heredando los atributos */
const empresa = new Empresa('Udemy', 1000000,12091398,'Educacion');


console.log(empresa);
console.log(empresa.nombreClienteSaldo());
