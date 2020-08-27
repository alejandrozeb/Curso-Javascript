const {app,BrowserWindow}= require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let appWindow;

function crearVentana(){
    appWindow = new BrowserWindow({
        //ajustar tamaño
        width: 1200,
        height: 800,
        //no pude hacerlo mas qpequeño que es
        resizable: true,
        //tamaño minimo
        minWidth: 600,
        minHeight: 400,
        //cuando carga simpre estara en el centro
        center: true,
        //carga una pantalla y luego carga la vista para evitar que vea una pantalla blanca al inicio se pone
        show: false,
        //rl icono que se muestra en nuestra aplicaion
        icon: 'icon.png'
    }) 
    appWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, "../build/index.html")}`
    )
        //cuando la app esta lista para verse
    appWindow.once('ready-to-show', () => {
        appWindow.show();
    }) 
}

app.on('ready', crearVentana);
//para mac
app.on("window-all-closed",()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
})
//para mac
app.on('activate', () => {
    if(appWindow === null){
        crearVentana();
    }
})