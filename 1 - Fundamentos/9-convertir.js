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