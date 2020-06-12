/* const y otras propiedades */
/* al intentar cambiar una variable const sale un error que es normal por el tipo de dato
const nombre='Juan';
      nombre='navegar';
*/

/* forma de modificar con const */

const numeros=[1,2,3];
/* si se puede modificar de esta forma */
numeros[0]=4;

numeros.push(5);
/* con const no puedes modificar reasignando directamente pero si individualmente o meidiante las funciones */

console.log(numeros);