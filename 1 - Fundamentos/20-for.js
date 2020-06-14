/* for loop */


for(let i=0; i<10;i++){
    console.log(`Hola soy un for ${i}`);
}

/* con if */

for(let i=0; i<10;i++){
    if (i === 5) {
        console.log(`Hola soy un for ${i} en un if`);    
        continue; /* se va a una siguiente iteracion, para parar se usa break; */
    }
    
    console.log(`Hola soy un for ${i}`);   
}

for(let i=0; i<10;i++){
    if (i % 2=== 0) {
        console.log(`Hola soy un for par ${i} en un if`);    
    }else{
        console.log(`Hola soy un for impar ${i} en un if`);    
    }
    
    
}