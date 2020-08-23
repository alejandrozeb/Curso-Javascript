import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//componetnes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';


function App() {

  
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
