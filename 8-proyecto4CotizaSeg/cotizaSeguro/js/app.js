// Cotizador Constructor
// Cada vez que se presione el boton cotizar se lanza la funcion 
function Seguro(){}
/* inicio selec de años */
//Para llenar los select del año

const max = new Date().getFullYear(),
      min = max - 20;//el nummero minimo de años pedido por la empresa

const selectAnios = document.getElementById('anio');
//cpnstruye el elemento para el form select de mayor a menor (de max a min)
for(let i= max; i>min; i--){
    let option = document.createElement('option');
    option.value=i;//le doy el i como value
    option.innerHTML = i;//escribe el i en la etiqueta
    selectAnios.appendChild(option);
}
/* -------fin select--------- */