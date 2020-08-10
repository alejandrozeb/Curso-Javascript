import React, {Fragment,useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
function App() {
  //definir state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  return (
    <Fragment>
        <Header 
            titulo= "Cotizador de Prestamos"
       />

       <div className="container">
          <Formulario 
            cantidad={cantidad}
            guardarCantidad={guardarCantidad}
            plazo={plazo}
            guardarPlazo={guardarPlazo}
          />
       </div>
    </Fragment>
  );
}

export default App;
