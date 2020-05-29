<template>
    <div class="LugarUpdate container-fluid px-5 pt-5">

        <div class="row">
            <div class="col">
                <!-- Formulario registro lugares -->
                <form
                    @submit="checkForm"
                    class="cont-form"
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
                    
                    
                    
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col">
                            <!-- Input titulo -->
                            <div class="form-group row">
                                <label for="titulo">Titulo:</label>
                                <input type="text" class="form-control" id="titulo" v-model="titulo">
                            </div>
                        </div>
                        <div class="col-1"></div>
                        
                    </div>
                    
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-5">
                            <!-- Input dirección -->
                            <div class="form-group row">
                                <label for="direccion">Direccion:</label>
                                <input type="text" class="form-control" id="direccion" v-model="direccion">
                            </div>
                            <!-- Input Latitud -->
                            <div class="form-group row">
                                <label for="latitud">Latitud:</label>
                                <input type="text" class="form-control" id="latitud" v-model="latitud">
                            </div>
                            <!-- Input Longitud -->
                            <div class="form-group row">
                                <label for="longitud">Longitud:</label>
                                <input type="text" class="form-control" id="longitud" v-model="longitud">
                            </div>
                        </div>
                        <div class="col-1"></div>
                    </div>
                    
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-6">
                            <!-- Input descripción -->
                            <div class="form-group row">
                                <label for="descripcion">Descripcion:</label>
                                <textarea class="form-control" id="descripcion" placeholder="Required example textarea" v-model="descripcion"></textarea>
                                <div class="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div>
                            </div>
                        </div>
                        <div class="col-5 d-flex align-items-center ">
                            <!-- Input imagen -->
                            <div class="form-group row">
                                <div class="col">
                                    <label for="imagen" class="label-imagen">
                                        Subir imagen:  
                                        <img src="@/assets/img/input_image.svg" alt="Sube tu imagen"> 
                                    </label>
                                    <input type="file" accept="image/*" @change="uploadImage($event)" class="imagen">
                                </div> 
                            </div>
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
            <!-- Mapa para seleccionar las cordenadas -->
            <div id="col-map" class="col-5">
                <div class="row">
                    <l-map
                        ref="myMap"
                        @ready="doSomethingOnReady()"
                        @click="clickCordenadas()"
                        :zoom="zoom"
                        :center="center"
                        style="height: 350px; width: 100%"
                    >
                        <l-tile-layer
                            :url="url"
                            :attribution="attribution"
                        />
                        <l-marker :lat-lng="[latitud,longitud]" />
                    </l-map>
                </div>
            </div>
        </div>
        
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
            this.imagen=response.data.imagen;
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
                   // this.$router.push("/");


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
        height: 68em;

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
    #col-map{
        padding-top:10em ;
    }
    #col-map .row{
        padding: 1em;
        background-color: rgba(0, 0, 0, 0.521);
        border-radius: 20px;
    }
    .titulo{
        color:white;
    }
    input{
        color:black;
    }
</style>