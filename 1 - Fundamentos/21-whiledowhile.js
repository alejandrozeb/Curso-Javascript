/* while */
/* el incremento es mas controlable al igual que la sentencia */
let i=0;
while(i < 10){
    console.log(`Numero: ${i}`);
    i++;
}

/* se puede cortar como el for con un break y un continue */

const musica=['Musica 1','Musica 2','Musica 3'];
i=0;
while (i < musica.length) {
    console.log(`reproduciendo la cancion : ${musica[i]}`);
    i++;
}

/* en el do entra por lo menos una vez a la estructura */

i=0;
do  {
    console.log(`Numero :- ${i}`);
    i++;
}while(i < 10)