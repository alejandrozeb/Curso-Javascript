import React, {Fragment} from 'react';  //importamos react

//un componente siempre sera una funcion.
//primer componente
function Header({titulo}){
     //aqui podemos colocar codigo estandar de js
     
     

    return(                 //es una funcion de react y lo que devolvemos es la vista
        <Fragment>
            <h1>{titulo}</h1>
        </Fragment>
    )
}

export default Header;