//local storage, permite añadir cierta informacion en el navegador
//agregar al localstorage

localStorage.setItem('nombre', 'juan');
/* donde el primer input es el key y el segundo el dato */

//sesion storage

sessionStorage.setItem('nombre','juan');

/*  en el local storage se bora eliminando cache manualmento, el session storage se borra al salir del navegador*/

//eliminar el local storage

//localStorage.removeItem('nombre');

/* mostrar lo del local storage */

const nombre = localStorage.getItem('nombre');
console.log(nombre)

//eliminar todo
localStorage.clear();
