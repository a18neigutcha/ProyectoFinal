<template>
    <div class="LugarUpdate container-fluid px-5 pt-5">

        <!-- Formulario actualizacion de lugares -->
        <form
            @submit="checkForm"
            class="cont-form p-3"
        >
            <div class="row pt-5">
                <div class="col-1"></div>
                <div class="col">
                    <h3 class="titulo mb-5">Añade una actividad</h3>
                    <!-- lista errores -->
                    <p v-if="errors.length">
                        <b>Please correct the following error(s):</b>
                        <ul>
                            <li v-for="(error,id) in errors" :key="id">{{ error }}</li>
                        </ul>
                    </p>
                </div>
            </div>
            
            <!-- Input titulo -->
            <div class="form-row d-flex justify-content-center">
                <div class="col-md-6 mb-3">
                    <label for="titulo">Titulo:</label>
                    <input type="text" class="form-control" id="titulo" v-model="titulo">
                </div>
            </div>
            <!-- Input dirección -->
            <div class="form-row d-flex justify-content-center">
                <div class="col-md-6 mb-3">
                    <label for="direccion">Direccion:</label>
                    <input type="text" class="form-control" id="direccion" v-model="direccion">
                </div>
            </div>

            <div class="form-row d-flex justify-content-center">
                <div class="col-md-3 mb-3">
                    <!-- Input Latitud -->
                    <label for="latitud">Latitud:</label>
                    <input type="text" class="form-control" id="latitud" v-model="latitud">
                </div>
                <div class="col-md-3 mb-3">
                    <!-- Input Longitud -->
                    <label for="longitud">Longitud:</label>
                    <input type="text" class="form-control" id="longitud" v-model="longitud">   
                </div>
            </div>

            <div class="row my-5">
                <div class="col-2"></div>

                <!-- Mapa para seleccionar las cordenadas -->
                
                <div id="col-map" class="col d-flex justify-content-center">
                    <div class="cont-map">
                        <l-map
                            ref="myMap"
                            @ready="doSomethingOnReady()"
                            @click="clickCordenadas()"
                            :zoom="zoom"
                            :center="center"
                            style="height: 100%; width: 100%"
                        >
                            <l-tile-layer
                                :url="url"
                                :attribution="attribution"
                            />
                            <l-marker :lat-lng="[latitud,longitud]" />
                        </l-map>
                    </div>
                </div>
                
                <div class="col-2"></div>
            </div>
            
            <div class="form-row d-flex justify-content-center">
                <div class="col-md-5 mx-4 mb-3">
                    <!-- Input descripción -->
                    <label for="descripcion">Descripcion:</label>
                    <textarea class="form-control" id="descripcion" placeholder="Required example textarea" v-model="descripcion"></textarea>
                </div>
                <div class="col-md-3 mb-3 d-flex justify-content-center">
                    <label for="imagen" class="label-imagen">
                        <p>Subir imagen: </p> 
                        <img src="@/assets/img/input_image.svg" alt="Sube tu imagen"> 
                    </label>
                    <input type="file" accept="image/*" @change="uploadImage($event)" id="imagen" class="imagen">
                </div>
            </div>

            <!-- Button submit -->
            <div class="form-group row pb-3">
                <div class="col-4"></div>
                <div class="col-4 d-flex justify-content-center">
                    <button v-on:click.prevent="post" class="btn btn-primary">Sign in</button>
                </div>
                <div class="col-4"></div>
            </div>
            
        </form>
        
    </div>

</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import axios from "axios";
export default {
    name: "AgregarActividades",
    components:{
        LMap,
        LTileLayer,
        LMarker
    },
    data(){
        return{

            /* Mapa */
            mapa:null,

            /* Errores */
            errors: [],

            /* Datos formulario lugares */
            titulo:"",
            direccion:"",
            descripcion:"",
            latitud: "",
            longitud: "",
            imagen:"",


            /* Datos mapa */
            zoom: 15,
            center: [41.3887901, 2.1589899],
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: latLng(0,0)
        }
    },
    mounted () {
        axios.get(this.API+'api/'+this.$route.params.id,)
        .then(response =>{
            this.titulo=response.data.titulo;
            this.direccion=response.data.direccion;
            this.descripcion=response.data.descripcion;
            this.latitud=response.data.latitud;
            this.longitud=response.data.longitud;
            this.imagen=response.data.imagen;
            this.center=[this.latitud,this.longitud];

            console.log(response.data);
        })

    },
    methods:{
        checkForm: function (e) {
            this.errors = [];

            if (!this.titulo) {
                this.errors.push("Titulo requerido");
            }else if (!this.direccion) {
                this.errors.push("Dirección requerida");
            }else if (!this.latitud || !this.longitud){
                this.errors.push("Cordenadas requeridas.");
            }else if (!this.descripcion){
                this.errors.push("Descripción requerida");
            }
            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();
        },
        post:function(){
            if(this.checkForm()){

                let body = new FormData();
                body.append('titulo', this.titulo);
                body.append('direccion', this.direccion);
                body.append('descripcion', this.descripcion);
                body.append('latitud', this.latitud);
                body.append('longitud', this.longitud);
                body.append('imagen', this.imagen);
                
                console.log(body);


                axios.put(this.API+'api/'+this.$route.params.id,body,{
                    headers: {
                        'accept': 'application/json',
                        'Accept-Language': 'en-US,en;q=0.8',
                        'Content-Type': `multipart/form-data; boundary=${body._boundary}`,
                        'x-access-token': this.$cookies.get('token'),
                    }
                })
                .then((response) => {
                    console.log(response.data);

                    //Redirige al inicio.
                    this.$router.push("/");


                },(error) => {
                    console.log(error.response.data);
                });
            }
        },
        doSomethingOnReady() {
            this.map = this.$refs.myMap.mapObject;
            //console.log(this.map.on);
            this.map.locate({enableHighAccuracy: true});

            this.map.on('locationfound',(e)=>{
                
                this.longitud=e.latlng.lng;
                this.latitud=e.latlng.lat;
                this.center=[e.latlng.lat,e.latlng.lng];
                this.marker=latLng(this.latitud,this.longitud);


            });
            
        },
        uploadImage(event){
            this.imagen = event.target.files[0];
        },
        clickCordenadas(){
            this.map.on('click',(e)=>{
                console.log(e);
                this.longitud=e.latlng.lng;
                this.latitud=e.latlng.lat;
                this.marker=latLng(this.latitud,this.longitud);
            });

        }
    }

}
</script>

<style scoped>

    @import "~leaflet/dist/leaflet.css";
    @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

    .imagen{
        display: none;
    }
    .label-imagen img{
        width: auto;
        height: 5em;
    }
    .LugarUpdate{
        background-image: url("https://images.pexels.com/photos/3827841/pexels-photo-3827841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        opacity: 1.0;

    }
    #descripcion{
        height: 10em;
        width: 100%;
    }
    .LugarUpdate label{
        color: white;
    }
    .cont-form{
        background-color: rgba(0, 0, 0, 0.521);
        border-radius: 20px;
    }
    #col-map .cont-map{
        padding: 1em;
        background-color: rgba(0, 0, 0, 0.521);
        border-radius: 20px;
        height: 20em;
        width: 100%;
    }
    .titulo{
        color:white;
    }
    input{
        color:black;
    }

    /* // Small devices (landscape phones, 576px and up) */
    @media (min-width: 200px) {
        .LugarUpdate{
            height: 90em;
        }
        #col-map .cont-map{
            height: 14em;
        }
    }

    /* // Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) {
        .LugarUpdate{
            height: 90em;
        }
        #col-map .cont-map{
            height: 20em;
        }
    }

    /* // Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {
        .LugarUpdate{
            height: 80em;
        }
        #col-map .cont-map{
            height: 20em;
        }
    }

    /* // Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {

    }

    /* // Extra large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) {

    }
</style>