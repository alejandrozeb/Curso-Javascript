import React,{Fragment} from 'react';
import {Link,withRouter} from 'react-router-dom';
import clienteAxios from '../config/axios';
const Cita = (props) => {
    //al recarga nos da un error, es por que el state se vuelve a cargar y no encuentra los datos.

    if(!props.cita){
        props.history.push('/');
        return null;    // si se pierde cita retorna a la pagina principal
    }

    //extraer por props
    const {cita: {_id,nombre, propietario,fecha,hora,telefono,sintomas}} = props;

    //elimina un registro
    const eliminarCita = id =>{
        console.log(id);
        //importando cliente de axios y enviando la peticion
        clienteAxios.delete(`/pacientes/${id}`)
            .then(respuesta => {
                //console.log(respuesta)
                //la bd se tiene que recargar
                props.guardarConsultar(true);
                //redireccion
                props.history.push('/');
            })
            .catch(error => {
                console.log(error)
            }); 


    }
    return ( 
        <Fragment>
           <h1 className="my-5">Nombre cita: {nombre}</h1>

           <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to="/" className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                                <div className="d-flex w-100 justify-content-between mb-4">
                                    <h3 className="mb-3">{nombre}</h3>
                                    <small className="fecha-alta">
                                    {fecha} - {hora}
                                    </small>
                                </div>
                                    <p className="mb-0">
                                        {sintomas}
                                    </p>
                                <div className="contacto py-3">
                                    <p> Dueño: {propietario}</p>
                                    <p>Teléfono:{telefono}</p>
                                </div>
                                <div className="d-flex">
                                    <button type="button"
                                        className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col"
                                        onClick={()=> eliminarCita(_id) }
                                        >
                                        Eliminar &times;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </Fragment>
     );
}
 
export default withRouter(Cita);