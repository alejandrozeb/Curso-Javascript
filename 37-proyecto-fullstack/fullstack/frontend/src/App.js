import React ,{useEffect,useState}  from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//importamos el cliente de axios

import clienteAxios from './config/axios';
//componetnes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';


function App() {
  //State de la aplicacion
  const [citas, guardarCitas] = useState([]); //lo gradamos como arreglo para verificar si existe

  useEffect( () => {
    const consultarAPI = () =>{
      clienteAxios.get('/pacientes')
        .then(respuesta => {
          //console.log(respuesta.data)
          //pasamos la respuesta a guardarCitas
          //colocar en el state el resultado
          guardarCitas(respuesta.data);

        })
        .catch(error => {
          console.log(error);
        });
    } 
    consultarAPI(); 
  }, [] );
  //nuestra dependencia es que si cambia un use satate

  return (
    <Router>
      <Switch>
         <Route 
            exact
            path="/"
            component={Pacientes}
         />
         <Route 
            exact
            path="/Nueva"
            component={NuevaCita}
         />
         <Route 
            exact
            path="/cita/:id"
            component={Cita}
         />
      </Switch>
    </Router>
  );
}

export default App;
