/* En javascript el tipo de dato se guarda en la variable a este tipo de lenguaje se llama, dinamico */

let valor;
valor='Juan';
valor=20; //todos son de tipo number
valor=20.20;

valor="20";
/* valor=20;
valor=true;
valor=null;
valor=undefined;
valor={nombre:'Juan'}; */
/* para saber el tipo */

//booleano
valor=false;
//null
valor=null;/* et devuelve un objeto */
//symbol
valor=Symbol('simbolo');

//arreglos -- 
valor=[1,2,3,4];//devuelve un objeto
//objetos
valor={
    nombre:'Juan',
    profesion:'Desarrollador Web'
}
//fecha de referencia
valor = new Date();
console.log(typeof valor);