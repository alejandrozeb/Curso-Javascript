//new bnding ya lo vimos en anteriores secciones, creando constructores

function Automovil(modelo,color){
    this.modelo=modelo;
    this.color = color;
}

const auto = new Automovil('Camaro','Negro');

console.log(Automovil);

//podemos dar valores al automovily llamarlos con this