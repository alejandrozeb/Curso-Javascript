const {app, BrowserWindow} = require('electron');


let appWindow;      //debe estar por fuera, por que electrons e encarga de la memoria y cundado recarga y esta adentro se lo lleva
function crearVentana(){
    //aqui pasamostoda la configuracion necesaria
    appWindow = new BrowserWindow({
        //ajustar tamaño
        width: 1200,
        height: 800,
        //no pude hacerlo mas qpequeño que es
        //resizable: false
        //tamaño minimo
        minWidth: 800,
        minHeight: 600,
        //cuando carga simpre estara en el centro
        center: true,
        //carga una pantalla y luego carga la vista para evitar que vea una pantalla blanca al inicio se pone
        show: false,
        //rl icono que se muestra en nuestra aplicaion
        icon: 'icon.png'
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