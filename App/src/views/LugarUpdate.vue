<template>
    <div class="container">
        <h3 class="mb-5 mt-5">Actualizar tu actividad: </h3>
        <!-- Formulario registro lugares -->
        <form
            @submit="checkForm"
        >
            <!-- lista errores -->
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="(error,id) in errors" :key="id">{{ error }}</li>
                </ul>
            </p>
            <!-- Input titulo -->
            <div class="form-group row">
                <label for="titulo" class="col-sm-2 col-form-label">Titulo:</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="titulo" v-model="titulo">
                </div>
            </div>
            <!-- Input dirección -->
            <div class="form-group row">
                <label for="direccion" class="col-sm-2 col-form-label">Direccion:</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="direccion" v-model="direccion">
                </div>
            </div>
            <!-- Input coordenadas -->
            <div class="mb-3">
                <div class="mb-3">
                    <l-map
                        ref="myMap"
                        @ready="doSomethingOnReady()"
                        @click="clickCordenadas()"
                        :zoom="zoom"
                        :center="center"
                        style="height: 500px; width: 100%"
                    >
                        <l-tile-layer
                            :url="url"
                            :attribution="attribution"
                        />
                        <l-marker :lat-lng="[latitud,longitud]" />
                    </l-map>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="latitud">Latitud</label>
                        <input type="text" class="form-control" id="latitud" v-model="latitud">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="longitud">Longitud</label>
                        <input type="text" class="form-control" id="longitud" v-model="longitud">
                    </div>
                </div>
                
            </div>
            <!-- Input descripción -->
            <div class="mb-3">
                <label for="descripcion">Descripcion:</label>
                <textarea class="form-control" id="descripcion" placeholder="Required example textarea" v-model="descripcion"></textarea>
                <div class="invalid-feedback">
                    Please enter a message in the textarea.
                </div>
            </div>
            <!-- Input imagen -->
            <div class="form-group row">
                <label for="imagen">Image: </label>
                <input type="file"  class="form-control-file" accept="image/*" @change="uploadImage($event)" id="imagen">
            </div>
            <!-- Button submit -->
            <div class="form-group row">
                <div class="col-sm-10">
                <button v-on:click.prevent="post" class="btn btn-primary">Sign in</button>
                </div>
            </div>
            
        </form>
    </div>
</template>

<script>
// import L from 'leaflet';
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
        axios.get('http://localhost:3000/api/'+this.$route.params.id,)
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


                axios.put('http://localhost:3000/api/'+this.$route.params.id,body,{
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
            //console.log(this.imagen);
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

<style>

@import "~leaflet/dist/leaflet.css";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

</style>