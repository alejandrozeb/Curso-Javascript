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
*/

