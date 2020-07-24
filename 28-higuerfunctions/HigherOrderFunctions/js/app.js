/* es un array con objetos */
const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];

//console.table(autos);//para mostrar como tabla

//si queremos listar todos los modelos anteriormente se hacia con un for 

/* for(let i=0; i < autos.length; i++){
	console.log(autos[i].marca);
}
console.log('-------------------000-----');
//lisatdo mayor a 40000
for(let i=0; i < autos.length; i++){
	if(autos[i].precio > 40000){
		console.log(autos[i].marca);
	}
}
//listado de puertas
for(let i=0; i < autos.length; i++){
	if(autos[i].puertas === 4){
		console.log(autos[i]);
	}
} */

//solo teniamos este tipo para recorrer un objeto, array u otras estructuras
//higuer function hacen el codigo mas facil de leer
// forEach
//sintaxis (nombre del arreglo)foreach((callback(es un arrow function) o una function)), el lementos que toma el valor (auto) por convencion se recomienda que sea singular

//se ejecuta una vez por cada elemento
/* autos.forEach((auto)=>{
	console.log(auto);	//no es necesario colocar el i
}) */

//creando un arreglo con los de color rojo
/* let resultado = [];
autos.forEach((auto)=>{
	if(auto.color === 'Rojo'){
		resultado.push(auto);
	}
});
console.log(resultado); */

/* el foreach se recomienda usar cuando tengas que recorrer todos los elemtnos del arreglo, listado por ejemplo*/

// map
/* es parecido al foreach con algunas diferencias */
/* el map te retorna un arreglo nuevo con lo que tienes en el array */

//el foreach no retorna valores solo los recorre
let resultado = autos.map((auto)=>{
	return auto;
});
//en los arrow functions el return viene implicito
resultado = autos.map(auto => auto);
//si quermos filtrar

resultado = autos.map((auto)=>{
	if(auto.marca === 'BMW'){
	return auto;	//retorna todos los campos de array pero los que no entrar al if, son escritos como undefined(en ese caso usar filter), se usa bastante en react,
	}
});

console.log(resultado);


// filter
/* tiene la cracteristica, de que crea un arreglo basada en una prueba  la sintaxis es parecida al map, igualmente te devuelve un valor*/
resultado = autos.filter(auto => {
	return auto.marca ==='BMW';	//la prueba es lo que vamos a revisar en el arreglo, como veras no es necesario usar el if 
});
/* retorna en un array solo los datos que queremos a diferencia de el map que retorna todo con undefned */
console.log(resultado);
//por color

resultado = autos.filter(auto => auto.color ==='Rojo');
console.log(resultado);

//del año 2018
resultado = autos.filter(auto => auto.year ===2018);
console.log(resultado);
// amyor a 2015
resultado = autos.filter(auto => auto.year >2015);
console.log(resultado);
//por precio
resultado = autos.filter(auto => auto.precio > 50000);
console.log(resultado);
//por puertas
resultado = autos.filter(auto => auto.puertas ===2);
console.log(resultado);
//por transmision
resultado = autos.filter(auto => auto.transmision === 'manual');
console.log(resultado);
//con dos condiciones
resultado = autos.filter(auto => auto.year >=2015 && auto.year <= 2017);
console.log(resultado);
//por año y marca
resultado = autos.filter(auto => auto.year >=2016 && auto.marca === 'BMW');
console.log(resultado);

/* se puede aplicar con json */
// find

// reduce

// some


