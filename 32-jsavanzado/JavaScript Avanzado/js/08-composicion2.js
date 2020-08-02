//Composicion parte2

const obtenerNombre = (info) => ({  
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }

});

//Agreagaremos atributos a los objetos con composicion

const guadarEmail = (info) => ({
    email(email){
        console.log(`Guardardando email en ${info.nombre}`);
        info.email = email;     //se agrega el email al obejto
    }
});

const obtenerEmail = (info) => ({
    mostrarEmail(){
        console.log(`Email: ${info.email}`);
    }
});
const obtenerEmpresa = (info) => ({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
});
const obtenerPuesto = (info) => ({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
});

function CLiente(nombre,email,empresa){
    let info = {
        nombre,
        email,
        empresa
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guadarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
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
        obtenerNombre(info),
        guadarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = CLiente('Juan',null,'Udemy');//null por uqe lo agregamos despues
cliente.mostrarNombre(); 
//nuevas funciones
cliente.email('cliente@cliente.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();  //diferencia 

const empleado = Empleado('Pedro',null,'Programador');
empleado.mostrarNombre();
empleado.email('empleado@empleado.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();//diferencia

//la compiscion es hacer una serie de funciones y agregar al un objeto