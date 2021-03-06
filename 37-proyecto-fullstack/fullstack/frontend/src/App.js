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
  const [citas, guardarCitas] = useState([]); //lo gradamos como arreglo para verificar si existec
  const [consultar, guardarConsultar] = useState(true); // en true es que va a realizar la consulta


  useEffect( () => {
    if(consultar){
      const consultarAPI = () =>{
        clienteAxios.get('/pacientes')
          .then(respuesta => {
            //console.log(respuesta.data)
            //pasamos la respuesta a guardarCitas
            //colocar en el state el resultado
            guardarCitas(respuesta.data);
            //deshabilitar la consulta
            guardarConsultar(false);
          })
          .catch(error => {
            console.log(error);
          });
      } 
      consultarAPI(); 
    }
  }, [consultar] );     //le decimos a react que este alos cammbios
  //nuestra dependencia es que si cambia un use satate

  return (
    <Router>
      <Switch>
         <Route 
            exact
            path="/"
            component={() => <Pacientes citas={citas}/>}
         />
         <Route 
            exact
            path="/Nueva"
            component={() => <NuevaCita guardarConsultar={guardarConsultar} />}
         />
         <Route 
            exact
            path="/cita/:id"
            render={(props) => {
              //console.log(props.match.params.id);
              const cita = citas.filter(cita => cita._id === props.match.params.id)
              //pasamos al componente
              return(
                <Cita 
                  cita={cita[0]}
                  guardarConsultar= {guardarConsultar}
                />
              )
            }}//render permite escribir codigo
         />
      </Switch>
    </Router>
  );
}

export default App;
