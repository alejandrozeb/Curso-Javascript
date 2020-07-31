//trim
const correo = '    correo@correo.com    ';

//trim start permite eliminar el espacio en blanco de una cadena de texto

console.log(correo);        //imprime con espacios

console.log(correo.trimStart());    //elimna los espacios del inicio

console.log(correo.trimEnd());  //eliimina los espacios del final

console.log(correo.trimStart().trimEnd());  //elimina del inicio y el final

console.log(correo.trim()); //elimina espacios, desde siempre