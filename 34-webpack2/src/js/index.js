import "../css/style.scss";

class Cliente{
    constructor(nombre){
        this.nombre = nombre;
    }
}

const cliente = new Cliente('juan');
console.log(cliente);