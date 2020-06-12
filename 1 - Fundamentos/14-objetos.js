/* crear un objeto */
/* los objetos en javascript: los atributos van sin comillas y los datos en comillas separados por unos : */
const persona = {
    nombre:'Miguel',
    apellido: 'Martinez',
    profesion: 'Diseñador Gráfico',
    email: 'correo@correo.com',
    edad:20,
    musica: ['trance','rock','grunge'],
    hogar: {
        ciudad: 'La Paz',
        pais: 'Bolivia'
    },
    /* tambien se puede agregar funciones */
    nacimiento: function(){
        return new Date().getFullYear()-this.edad;
    }
    /* para acceder a las propiedades del mismo objeto se coloca this */
}
persona.musica.push('pop');
console.log(persona);
console.log(persona.hogar.ciudad)
/* otra forma de acceder no se recomienda por que no es muy usada */
console.log(persona['hogar']['pais']);
/* mostrando funcion */
console.log(persona.nacimiento());

/* edad distinra */
const persona2 = {
    nombre:'Miguel',
    apellido: 'Martinez',
    profesion: 'Diseñador Gráfico',
    email: 'correo@correo.com',
    edad:30,
    musica: ['trance','rock','grunge'],
    hogar: {
        ciudad: 'La Paz',
        pais: 'Bolivia'
    },
    /* tambien se puede agregar funciones */
    nacimiento: function(){
        return new Date().getFullYear()-this.edad;
    }
    /* para acceder a las propiedades del mismo objeto se coloca this */
}
console.log(persona2.nacimiento());