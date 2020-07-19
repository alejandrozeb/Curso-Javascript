//negar la expresion

expReg = /[^0-9]/;              //(^)niega la expresion, acepta todo lo contrario del 0 al 9           
valor = 1992;
console.log(expReg.test(valor));
//prueba
valor = 'Hola';
console.log(expReg.test(valor));

/* otra de forma de hacer fechas */

//La sintaxis {1,2}

expReg = /\d{1,2}-\d{1,2}-\d{4}/      // /d{1,2} ùede tener de 1 a 2 digitos y \d{4} tiene 4 digitos

valor='10-10-2018';
console.log(expReg.test(valor));
valor='1-1-2018';
console.log(expReg.test(valor));
valor='10-100-2018';
console.log(expReg.test(valor));
valor='10-10-208';
console.log(expReg.test(valor));

//ayuda a tener un codigo mas compacto

//evaluar letras o numeros

expReg = /\w+/      //revisa si los valores son solo numeros o textos

valor = 'Mensaje de prueba';
console.log(expReg.test(valor));

valor = 1234;
console.log(expReg.test(valor));

valor = ' ';
console.log(expReg.test(valor));

//revisar que sean puros numeros

expReg = /\d+/;
valor = 1234;
console.log(expReg.test(valor));

//en rango
//numeros
expReg = /([1-9])\d+/;
valor = 'MENSAJE';
console.log(expReg.test(valor));
//que un teto sea puras mayusculas

expReg = /([A-Z])\w+/;
valor = 'MENSAJE';
console.log(expReg.test(valor));

//todo el texto en minusculas
expReg = /([a-z])\w+/;
valor = 'mensaje de prueba';
console.log(expReg.test(valor));

/* se pueden evaluar los mail, para expresiones regulares, existen herramientas que te ayudan a construir tu expresion regular, con expresiones regulares se puede validar y hace tu sistema mas seguro */


//expresion regular para email
//ademas se debe tomar el tipo de formato si es unicode o no me refiero a acentos o ñ
expReg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
valor = 'abcde.fghi@gmail.com';
console.log(expReg.test(valor));
