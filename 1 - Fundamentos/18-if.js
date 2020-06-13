/* estructura de control if */
const edad=18;
if(edad != 18){
    console.log('si puedes entrar');
} else{
    console.log('no puedes entrar al sitio');
}
/* comprobar que una variable tiene un valor */
let puntaje;

if(puntaje){
    console.log('existe');
}else{
    console.log('no existe');
}

/* otra forma */

if(typeof puntaje != 'undefined'){
    console.log('existe');
}else{
    console.log('no existe');
}

/*  */

let efectivo = 500;
let totalcarrito=300;

if (efectivo>totalcarrito) {
    console.log('pago correcto');
} else {
    console.log('fondos insuficientes');
}
/* tambien se puede escribir sin llaves solo con identacion */


