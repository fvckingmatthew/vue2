<template>
    <div>
        <div
                class="google-map"
                ref="googleMap"
                :google="google"
                :map="map"
        >
        </div>
    </div>
</template>

<script>
    import GoogleMapsApiLoader from "google-maps-api-loader";
    import { mapSettings } from "../map/constants/mapSettings"; // единые настройки и стили для гуглокарт
    import MapMarker from "../../../assets/icon/map-marker.svg";

    export default {
        name: "GoogleMapLoader",
        props: {
            apiKey: String,
            zoom: Number,
            markers: [String, Array]
        },
        data() {
            return {
                google: null,
                map: null,
                points: []
            };
        },

        methods: {
            initializeMap() {
                const mapContainer = this.$refs.googleMap;
                this.map = new this.google.maps.Map(mapContainer, this.mapConfig);      // сгенерировали карту с установленной конфигурацией в контейнер
                if(this.points.length > 1) {            // если у нас больше одного маркера
                    const { Marker } = this.google.maps;
                    for(let i in this.points) {         // в цикле устанавливаем для карты новые маркеры из координат в массиве points
                        new Marker({
                            position: this.points[i],
                            map: this.map,
                            icon: MapMarker
                        });
                    }
                } else {
                    const { Marker } = this.google.maps;
                    new Marker({                        // устанавливаем для карты новый маркер
                        position: this.map.getCenter(),     // координата берется из значения центра карты
                        map: this.map,
                        icon: MapMarker
                    });
                }
            },
            setConfig() {
                let coord = [];
                let draggable = false;              // флаг, разрешающий перетаскивание карты
                if(Array.isArray(this.markers)){       // если markers - это массив
                    coord = this.markers[0].split(',');     // берем нулевое значение массива и разбиваем его на координаты
                    if(this.markers.length > 1) draggable = true;       // если в массиве markers больше одног значения, то разрешаем перетаскивание карты
                } else {
                    coord = this.markers.split(',');            // берем строку из markers и разбиваем его на координаты
                }

                return {
                    ...mapSettings,             // все необходимые стандартные стили и настройки
                    center: new this.google.maps.LatLng(coord[0], coord[1]),    //координаты центра карты
                    zoom: this.zoom,                                            //значение приближения карты
                    draggable: draggable                                        // возможность перетаскивания карты мышкой
                };
            },
        },

        created() {
            this.$store.dispatch('receiveIntroStatus', 1);

            if(Array.isArray(this.markers)) {               // если переменная markers является массивом
                if (this.markers.length > 1) {              // если массив маркеров больше 1
                    for (let i in this.markers) {                   // то в цикле
                        let tempMap = this.markers[i].split(',');           // разбиваем строку-значение каждого элемента массива на координаты
                        this.points[i] = {lat: parseFloat(tempMap[0]), lng: parseFloat(tempMap[1])};        // записываем в массив точек
                    }
                } else {
                    let tempMap = this.markers[0].split(',');       //иначе разбиваем единственное значение массива на координаты
                    this.points = [{lat: tempMap[0], lng: tempMap[1]}];     // записываем в массив точек
                }
            } else {
                let tempMap = this.markers.split(',');          // переменная markers является строкой и мы разбиваем ее на координаты
                this.points = [{lat: tempMap[0], lng: tempMap[1]}];     // записываем в массив точек
            }
        },

        async mounted() {
            const googleMapApi = await GoogleMapsApiLoader({
                apiKey: this.apiKey
            });
            this.google = googleMapApi;
            this.mapConfig = this.setConfig();              // устанавливаем конфигурацию карты
            this.initializeMap();                           // инициализируем карту
            this.$store.dispatch('receiveIntroStatus', -1);
        },
    }
</script>

<style scoped>

</style>