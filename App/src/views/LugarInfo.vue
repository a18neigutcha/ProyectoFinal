<template>
  <div class="container-fluid">
      <!-- Imagen lugar -->
      <div class="row mb-5">
          <div class="col p-0">
              <div class="contenedor">
                  <img :src="datosLugar.imagen" class="imagen" alt="Imagen del lugar">
                  <div class="textoFlotante">
                      <h2>{{datosLugar.titulo}}</h2>
                  </div>                  
              </div>
              
          </div>    
      </div>
      <!-- Titulo -->
      <!-- <div class="row mb-3">
          <div class="col d-flex justify-content-center">
              
          </div>
      </div> -->
      <!-- Informacion complementaria -->
      <div class="row" id="informacion">
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
              <!-- Mapa direccion -->
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
      <!-- <div class="row">
          <div>
              <h5>Noticia titulo</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et consectetur ratione ullam nostrum ducimus quos voluptatibus fuga porro! Voluptatibus quasi quidem magni, culpa autem aperiam voluptatem velit fugiat quo fugit!</p>
          </div>
      </div> -->

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
                this.actualizarDatos();

            },
            noMeGusta: function(){
                this.datosLugar.valoracion--;
                this.like=false;
                this.actualizarDatos();
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
    .imagen{
        height: 20em;
        width: 100%;
        border: 1px solid black;
        border-radius: 5px;
    }
    #informacion{
        margin-left: 3em;
        margin-right: 3em;
    }
    .contenedor{
        width: 100%;
        position: relative;
        display: inline-block;
        text-align: center;
    }
    .textoFlotante{
        position: absolute;
        top: 95%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 0.5em 25em 0.5em 25em;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .textoFlotante h2{
        white-space: nowrap;
    }
</style>