/* builder, es muy similar al factory se crea como una bstraccion (una capa aparte de funcionalidad) creas una capa extra y trabajas sobre ella, es necesario agregar el tipo y el contenido de lo que vamos a crear */

//un formulario es un ejemplo de builder

class Formulario{
    constructor(){
        this.campos=[]
    }
    //metodo para crear inputs
    agregarCampo(tipo,texto){
        let campos = this.campos;   //agrego los campos que ya existian
        let campo;
        //aqui definimos que se va a instanciar

        switch (tipo) {
            case "text":
                    campo = new InputText(texto);
                break;
            case "email":
                    campo = new InputEmail(texto);
                break;
            case "button":
                    campo = new Boton(texto);
                break;
                    
        
            default:
                throw new Error("Tipo no valido" + tipo);
        }

        campos.push(campo);
    }
    //crea el formulario y los inserta los inputs
    obtenerformulario(){
        let form = document.createElement('form'),
        campos = this.campos.length,
        campo;

        for(let i=0; i< campos; i++){
            campo = this.campos[i]; //recorre los datos de campos
            form.appendChild(campo.crearElemento());
            let br = document.createElement('br');
            form.appendChild(br);
        }
        return form;

    }
}
//instaciar clases
class Inputs{
    constructor(texto){
        this.texto = texto;
    }
}
//heredan de input
class InputText extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const inputText = document.createElement('input'); //crea el input
        inputText.setAttribute('type', 'text'); //cambia el atributo
        inputText.setAttribute('placeholder', this.texto); //añade de place holder nuestro texto
        return inputText;
    }
}
class InputEmail extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const inputEmail = document.createElement('input'); //crea el input
        inputEmail.setAttribute('type', 'text');
        inputEmail.setAttribute('placeholder', this.texto);
        return inputEmail;
    }
}
class Boton extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const button = document.createElement('button'); 
        button.setAttribute('type', 'submmit');
        button.textContent=this.texto;
        return button;
    }
}

//instanciar formulario

const formulario = new Formulario();
formulario.agregarCampo('text', 'Añade tu nombre');
formulario.agregarCampo('text', 'Añade tu apellido');
formulario.agregarCampo('email', 'Añade tu correo');
//formulario.agregarCampo('imagen', 'Añade tu imagen');//entra al error
formulario.agregarCampo('button', 'enviar Formulario');

console.log(formulario);
//redenrizar en el html, cuando carga la pagina

document.addEventListener('DOMContentLoaded',() =>{
    document.querySelector('#app').appendChild(formulario.obtenerformulario());
});

/* crea distintos tipos de objetos donde especificas el tipo de objeto que se va a crear, (otros ejemplos para rutina de ejercicios)*/