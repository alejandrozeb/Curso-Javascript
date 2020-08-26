const {app, BrowserWindow} = require('electron');


let appWindow;      //debe estar por fuera, por que electrons e encarga de la memoria y cundado recarga y esta adentro se lo lleva
function crearVentana(){
    //aqui pasamostoda la configuracion necesaria
    appWindow = new BrowserWindow({

    });
    //cuando la aplicacion es cerrada
    appWindow.on('closed', () => {
        appWindow = null;
    });
    //cargar html
    appWindow.loadFile('./index.html');
    //cuando la app este lista, mostrar la ventana
    appWindow.once('ready-to-show', () =>{
        appWindow.show();   //muestra
    })
}

app.on('ready', crearVentana);//es un evento cuando todo este listo le pasamos nuestra ventana.