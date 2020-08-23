import axios from 'axios';

const clienteAxios = axios.create({
    //definimos la url base
    baseURL: process.env.REACT_APP_BACKEND_URL
});

export default clienteAxios;