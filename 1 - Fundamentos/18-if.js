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

/* elseIF */
/* anidados, %mofdulo, && and,|| or ,** exponecial */
/* else if, al lado del else va el if  */
let hora=-3;

if (hora>0 && hora<25 && hora <= 10) {
    console.log('Buenos días');
} else if(hora>0 && hora<25 && hora <=18){
    console.log('Buenas tardes');
}else if(hora>0 && hora<25 && hora <=24){
    console.log('Buenas tardes');
}
else{
    console.log('hora invalida');
}

/* forma de anidacion prefiero anidar por que tengo mas restricciones y control sobre los ifs*/
if (hora <= 10) {
    console.log('Buenos días1');
} else {
    if(hora <=18){
        console.log('Buenas tardes2');
    }
    else{
        console.log('Buenas noches3');
    }
}

/* or || ejemplo */
  efectivo=300;
 let credito=400,
    totalCarrito= 500;
if (totalcarrito < efectivo || totalcarrito < credito) {
    console.log('Puedo pagar');
}else{
    console.log('No puedo pagar');
}

/* ternario en una sola linea */

const logueado=true;
// sintaxis del ternario
/* condicion ? true : false */
console.log(logueado === true ? 'si se logue':'no se logueo');

