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
                
                break;
            case "email":
                break;
            case "button":
                break;
                    
        
            default:
                throw new Error("Tipo no valido" + tipo);
        }

        campos.push(campo);
    }
}

class Inputs{
    constructor(texto){
        this.texto = texto;
    }
}

//instanciar formulario

const formulario = new Formulario();