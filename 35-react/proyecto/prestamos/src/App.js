import React, {Fragment} from 'react';
import Header from './componentes/Header';
function App() {
  return (
    <Fragment>
        <Header />  {/* comentario asi llamamos un componente */}
        <Header 
            titulo= "Cotizador de Prestamos"
            descripcion= "Esta es una descripcion"
       />
    </Fragment>
  );
}

export default App;
