<template>
  <div class="container">
      <!-- Titulo -->
      <div class="row mt-5 mb-3">
          <h3>{{datosLugar.titulo}}</h3>
      </div>
      <!-- Informacion complementaria -->
      <div class="row">
          <div class="col-5">
            <!-- Campo direccion -->
            <div>
                <h5>Direccion:</h5>
                <p>{{datosLugar.direccion}}</p>
            </div>
            <!-- Campo descripcion -->
            <div>
                <h5>Descripcion:</h5>
                <p>{{datosLugar.descripcion}}</p>
            </div>
            <!-- Campo valoracion -->
            <div>
                <button v-show="!like" type="button" class="btn btn-primary" @click="meGusta()">
                    <i class="fas fa-thumbs-up"></i>
                    <span class="ml-2 badge badge-light">{{datosLugar.valoracion}}</span>
                </button>
                <button v-show="like" type="button" class="btn btn-primary" @click="noMeGusta()">
                    <i class="fas fa-thumbs-down"></i>
                    <span class="ml-2 badge badge-light">{{datosLugar.valoracion}}</span>
                </button>
            </div>
            
          </div>
          <div class="col">
              <l-map style="height: 350px" :zoom="zoom" :center="center">
                <l-tile-layer :url="url"></l-tile-layer>
                <l-marker :lat-lng="markerLatLng" ></l-marker>
              </l-map>
          </div>
      </div>
      <div class="row mb-5">
          <div class="col">
              
          </div>
      </div>


      <!-- Historias/Noticias -->
      <div class="row">
          <div>
              <h5>Noticia titulo</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et consectetur ratione ullam nostrum ducimus quos voluptatibus fuga porro! Voluptatibus quasi quidem magni, culpa autem aperiam voluptatem velit fugiat quo fugit!</p>
          </div>
      </div>

  </div>
</template>

<script>

    import axios from "axios";
    import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

    export default {
        name:"LugarInfo",
        components:{
            LMap,
            LTileLayer,
            LMarker
        },
        data () {
            return {

                /* Estados usuario */
                like:false,

                /* Datos lugar */
                datosLugar:{},

                /* Datos mapa */
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                zoom: 13,
                center: [47.313220, -1.319482],
                markerLatLng: [47.313220, -1.319482]
            };
        },
        mounted () {
            axios.get('http://localhost:3000/api/'+this.$route.params.id,)
            .then(response =>{
                this.datosLugar=response.data;
                console.log(response.data);
            })

        },
        methods:{
            meGusta: function (){
                this.datosLugar.valoracion++;
                this.like=true;
                this.actualizarDatos;

            },
            noMeGusta: function(){
                this.datosLugar.valoracion--;
                this.like=false;
                this.actualizarDatos;
            },
            actualizarDatos:function(){
                axios.put('http://localhost:3000/api/valoracion/'+this.datosLugar.id,{
                    valoracion:this.datosLugar.valoracion
                },{
                    headers: {
                        'accept': 'application/json',
                        'x-access-token': this.$cookies.get('token'),
                    }
                })
                .then((response) => {
                    console.log(response.data);

                },(error) => {
                    console.log(error.response.data);
                });
            }
        }
    }
</script>

<style>

</style>