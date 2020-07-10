async function leerTodos(){
    //esperar la respuesta
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
    //podemos crear todos los await que queramos

    //procede cuando la respuesta este hecha

    const datos = await respuesta.json();

    return datos;

    //retorna un promises
}

leerTodos()
//leemos el json
    .then(usuarios => console.log(usuarios))