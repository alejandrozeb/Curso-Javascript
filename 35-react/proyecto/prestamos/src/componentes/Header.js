import React, {Fragment} from 'react';  //importamos react


//function declaretion or function expression con sfc y enter se crea
const Header = ({titulo}) =>( 
        <Fragment>
            <h1>{titulo}</h1>
        </Fragment>
     );

export default Header;