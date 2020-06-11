const numero1="50",
      numero2=10,
      numero3='tres';

/* evalua entre datos pero tiene errores como el siguiente */
console.log(numero1+numero2); //no suma si no concatena
console.log(numero1-numero2); //detecta el mas para concatenar

/* para convertir cadennas a numeros */
console.log( Number(numero1)+numero2);
/* con parseInt */
console.log(parseInt(numero1)-numero2);
/* cuando trata de convertir un valor no nuerico devuelve el valor NaN (not a number)*/
console.log(Number(numero3));

let dato;
dato = Number("20");
dato= Number('20.10931');
dato= Number(true);
/* el resultado es 1 por que se asocia con 1 = true y 0 = false */
dato= Number(null);
dato= Number(undefined);
dato= Number('hola mundo');
dato= Number([1,2,3,4,5]);

//parseint,parsefloat

dato= parseInt('100');
dato= parseFloat('100');
dato= parseFloat('100.2030');
dato= parseInt('100');
console.log(dato);
/* tofixed solo aplica numero que ayuda a fijar una cantidad de digitos de un numero */
dato=18929173.34324234;
console.log(dato.toFixed(3));

dato='189291173';
console.log(parseInt(dato).toFixed(2));


