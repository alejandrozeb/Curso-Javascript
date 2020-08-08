//completar
/* watch
Este detecta los cambios y recarga el navegador, evita que tengamos que recargar cada vez la pagina a realizar algun cambio.
formas de uso en conosla:
webpack --watch --mode development
webpack --w --mode development                  (forma corta)
No olvidemos el --mode development o saltara un error
salimos del modo watch con ctrl + C
*/
/* importar css dentro de nuestro proyecto usamos los siguientes comandos para instalar dependencias:

npm install --save-dev style-loader css-loader
 luego abrimos el webconfig y agregamos rules.
 {
                test:/\.css$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            }
luego editamos nuestro punto de entrada(src/js/index.js) e importamos el css
import '../css/style.css';
algo que no podiamos hacer con js nativo 
********INSTALAR LAS VERSIONES DEL VIDEO************

**archivo sas
se necesita el sass loader

npm --save-dev sass-loader@
existen dos formas:
scss esta se parece a css
sass
y agregamos al config
{
                test: /\.scss$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ],
            }

y cambiamos el archivo style.css a style.scss

debemos instalar el node.sass
npm install -g node-sass
el -g es para que sea manera global y usarlo en otros proyectos.
para usar  bootstrap u otro framework  ponemos en import de index.js(src/js/index.js) 
**crearemos mas bundles.js (salidas)

una de las ventajas de webpack es que se puede usar diferentes modulos:
creamos otro archivo html llamado nosotros
el siguiente paso es modificarl el archivo config, cambiamos las entradas y la salida
entry: {
        index: './src/js/index.js',
        nosotros: './src/js/nosotros.js'
    },
    output:{
        filename: '[name].bundles.js',
        path: path.join(__dirname, '/dist')
    },

    finalmente renombramos la ruta de los scripts en las vistas(index.html,nosotros.html).

    podemos crear diferentes modulos, para que no cargue el mismo codigo cada vez y tener solo un arhivo comun donde podemos agregar funcionalidades con.
    **common Chunks***
    crearemos un archivo de codigo comun, crearemos un archivo que tengo ese codigo y ptros para modulos.
    en nuestro config añadimos otro campo al objeto llamado optimization:
    optimization:{
        splitChunks:{
            cacheGroups:{
                commons:{
                    test: /[\\/]node_modules[\\/]/,
                }
            }
        }
    }
    test: /[\\/]node_modules[\\/]/, es la expresion regular.

    luego ejecutamos el run con el buidl
    para que funcione en  las vistas debemos llamar al archivo common
    <script src="dist/common.bundles.js"></script>
    en index.html y nosotros.html.
    **web pack dev server****
    es el servidor que webpack nos provee, tiene tres opciones:
    npm install --save-dev webpack-dev-server
     devServer: {
        contentBase:        //desde donde va estar el servidor
         compress:true,
        port: 9000      //
    }

    y añadimos en nuestro config
    "dev": "webpack-dev-server --mode development --open"
    en la parte de script en la consola hacemos correr:
    npm run dev 
    y se abrirra un navegador, los archivos index.html y nosotros.html los movemos a  la carpeta dist

    ejemplo:
    en index html.js colocamos el siguinete codigo:
    const clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3', 'Cliente 4'];

//creamos html
let html = '';

clientes.forEach(cliente => {
    html += `
        <li>${cliente}</li>
    `; 
});

document.querySelector('#clientes').innerHTML = html;

y ejecutamos el build y el server
la idea de tener el sever es que se ve como se inyecta el codigo correctamente a nuestro doc.
tambien cambiamos el archivo style.css a:
 $primario : cornflowerblue;
$secundario: white;

#clientes{
    list-style: none;
    padding: 0;
    li {
        padding: 1rem;
        font-size: 1.4rem;
        background-color: $primario;
        color: $secundario;
        //para uno si otro no y cambiamos los colores
        &:nth-child(2n+1){
            background-color: $secundario;
            color: $primario;
        }
    }
}


*/

