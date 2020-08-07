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
*/

