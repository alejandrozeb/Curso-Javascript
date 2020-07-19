class UI {
    constructor() {

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
}