import React, {Fragment,useState} from 'react';
import {calcularTotal} from '../helpers'
const  Formulario = ({cantidad,guardarCantidad,plazo,guardarPlazo}) => {
    
    //Recibiendo datos con state
    //definir state
    const [error, guardarError] =useState(false);

    //Cuando el usuario hace submit
    const calcularPrestamo = e => {
        e.preventDefault();

        //validar
        if(cantidad === 0 || plazo === ''){
            //console.log('Hay un error...');
            guardarError(true);             //cambiamos el state
            return;
        }

        //eliminar el error previo
        guardarError(false);
        const total = calcularTotal(cantidad,plazo);
        console.log(total);
    }   




    //definir state cada pieza interactiva va a tener un state
   // const [cantidad, guardarCantidad] = useState(0); debemos usarlo en el padre por que lo usaremos es mas de un componente
    return (
        <Fragment>  
        <form onSubmit={calcularPrestamo}>{/* enviamos el formulario */}
            {/* {cantidad}
            {plazo} */}
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange={e => guardarCantidad(parseInt(e.target.value))}
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange={e => guardarPlazo(parseInt(e.target.value))} // aqui se coloca en los select 
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
      </form>
        {(error) ?  <p className="error">Todos los campos son obligatorios</p> : null }
       
  </Fragment>
     );
}
 
export default Formulario;