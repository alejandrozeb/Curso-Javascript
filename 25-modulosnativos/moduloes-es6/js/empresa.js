//importando cliente.js 
import {Cliente} from './cliente.js'



export const nombreEmpresa= 'Udemy';
export let ahorro = 2000000;
export const categoria = 'Aprendizaje'

export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro ${ahorro} -  Categoria: ${categoria}`;
}

//ya tenemos disponible el objeto cliente

//utilizar la clase del modulo ciente, extendemos el objeto a cliente a una clase Empresa

export class Empresa extends Cliente{
    constructor(nombre,ahorro,categoria){
        //para acceder al constructor de cliente y no rescribir usamos super

        super(nombre,ahorro);
        this.categoria = categoria;
        
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro ${this.ahorro} - Categoria: ${this.categoria}`;
    }
}