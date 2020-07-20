class UI {
    constructor() {

        //instanciamos nuestra api de establecimientos
        this.api = new API();
        //crear los markers con layergroup
        this.markers = new L.LayerGroup();
         // Iniciar el mapa
         this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);        //indica en que div se va a colocar el mapa, ademas defines la latitud y longitud donde se inicialiara el mapa y el 6 es el zoom con el que comienza
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',//es el codigo de abajo
             maxZoom: 18,//max zoom del mapa
             }).addTo(map);
         return map;

    }

    mostrarEstablecimientos(){
        this.api.obtenerDatos()
            .then(datos => {
                /* verificamos atravez del promise */
                //console.log(datos)
                const resultado = datos.respuestaJSON.results;  //accedemos a la respuesta y al result

                //ejecutar la funcion para mostrar los pines de los establecimientos
                this.mostrarpines(resultado);
            })
    }

    mostrarpines(datos){
        //console.log(datos);     //verificamos si se comunican correctamente

        //cada vez que usemos esta funcion se limpiaran los markers

        this.markers.clearLayers();

        //recorremos los establecimientos

        /* iremos pintando uno por uno */

        datos.forEach( dato => {
            //destructuring, necesitaremos 5 propiedades
            //debe llamarse igual para que funcione bien
            const {latitude,longitude,calle,regular,premium}=dato;

            //creando un popup (el mensaje en el globo con información)

            const opcionesPopUp= L.popup()  //setConten es una funcion propia de leaf
                .setContent(`       
                    <p>Calle: ${calle}</p>
                    <p><b>Regular:</b> $ ${regular}</p>
                    <p><b>Premium:</b> $ ${premium}</p>
                `);

            //agregar el pin

            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude),  //se debe pasar en ese orden
            ]).bindPopup(opcionesPopUp);             //añadimos los popup

            //agrrgando a una capa
            this.markers.addLayer(marker);
        });

        this.markers.addTo(this.mapa);
        //añadiendo al mapa
    }

    //buscador

    obtenerSugerencias(busqueda){
        this.api.obtenerDatos()
            .then(datos => {
                //obtenr los datos
                const resultados = datos.respuestaJSON.results;

                //enviar eljson y la busqueda para el filtrado
                this.filtrarSugerencias(resultados,busqueda);
            })
    }
    //filtrando las sugerencias en base al input

    fitrarSugerencias(resultado,busqueda){
        //filtrar con .filtrer

        //mostrar los pines
    }

}