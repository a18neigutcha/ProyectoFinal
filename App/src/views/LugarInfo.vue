<template>
  <div class="LugarInfo container-fluid">
      <div class="row mb-5">
          <div class="col-1"></div>
          <div class="col p-0">
              <div class="contenedor">
                  <!-- <img :src="datosLugar.imagen" class="imagenLugar" alt="Imagen del lugar"> -->
                  <div class="textoFlotante">
                      <!-- Titulo Lugar -->
                      <h2 class="text-light m-0">{{datosLugar.titulo}}</h2>
                  </div>                  
              </div>
          </div>
          <div class="col-1"></div>    
      </div>
      <!-- Informacion complementaria -->
      <div class="row pt-5" id="informacion">
          <div class="col-1"></div>
          <div class="col-5">
              <div class="cont-informacion">
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
                
            
          </div>
          <div class="col">
              <div class="row">
                  <div class="col">
                      <!-- Mapa direccion -->
                    <l-map style="height: 350px" :zoom="zoom" :center="center">
                        <l-tile-layer :url="url"></l-tile-layer>
                        <l-marker :lat-lng="markerLatLng" ></l-marker>
                    </l-map>
                  </div>
              </div>
              

          </div>
      </div>
        <div class="row mt-5">
            <div class="col-2"></div>         
            <div class="col">
                <div class="cont-imagen d-flex justify-content-center align-items-center">
                    <!-- <div class="arrow-image">
                        <img class="arrow" src="@/assets/img/arrow_left.svg" alt="Flecha izquierda ">
                    </div> -->
                    <!-- Imagen -->
                    <img :src="datosLugar.imagen" class="imagenLugar" alt="Imagen del lugar">
                    <!-- <div class="arrow-image">
                        <img class="arrow" src="@/assets/img/arrow_right.svg" alt="Flecha derecha">
                    </div> -->
                    
                </div>   
            </div>
            <div class="col-2"></div>
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
            axios.get('http://barcelonadesconocida.tk:3000/api/'+this.$route.params.id,)
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
                axios.put('http://barcelonadesconocida.tk:3000/api/valoracion/'+this.datosLugar.id,{
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

<style scoped>
    .LugarInfo{
        background-image: url("https://pikwizard.com/photos/geological-formation-mountain-landscape--0404786517ed44b7bfbd4de8d915341e-m.jpg");
        background-repeat: no-repeat;
        padding-top: 6em;
        height: 70em;
        background-size: cover;
    }
    .imagenLugar{
        height: 20em;
        width: 25em;
        border-radius: 5px;
        opacity: 0.9;
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
        top: 5%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.329);
        padding: 0.5em 10em 0.5em 10em;
        /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
        border-radius: 6px 80px 6px 80px;
        -moz-border-radius: 6px 80px 6px 80px;
        -webkit-border-radius: 6px 80px 6px 80px;
        /* border: 3px solid rgba(0, 0, 0, 0.123); */
        -webkit-box-shadow: 2px 9px 35px 1px rgba(0,0,0,0.75);
        -moz-box-shadow: 2px 9px 35px 1px rgba(0,0,0,0.75);
        box-shadow: 2px 9px 35px 1px rgba(0,0,0,0.75);
    }
    .cont-informacion{
        padding: 1em;
        background-color: rgba(0, 0, 0, 0.329);
        -webkit-box-shadow: 2px 9px 35px 1px rgba(0,0,0,0.75);
        -moz-box-shadow: 2px 9px 35px 1px rgba(0,0,0,0.75);
        box-shadow: 2px 9px 35px 1px rgba(0,0,0,0.75);
        
    }
    .cont-informacion h5,p{
        color:white;
    }
    .cont-informacion h5{
        font-weight: bold;
    }
    .textoFlotante h2{
        white-space: nowrap;
    }
    .cont-imagen{
        padding: 1em;
        background-color: rgba(255, 255, 255, 0.603);

        -webkit-box-shadow: -1px 4px 24px 5px rgba(255, 255, 255, 0.603);
        -moz-box-shadow: -1px 4px 24px 5px rgba(255, 255, 255, 0.603);
        box-shadow: -1px 4px 24px 5px rgba(255, 255, 255, 0.603);

        border-radius: 13px 13px 13px 13px;
        -moz-border-radius: 13px 13px 13px 13px;
        -webkit-border-radius: 13px 13px 13px 13px;
        border: 0px solid rgba(255, 255, 255, 0.603);
    }
    .arrow-image{
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .arrow{
        height: 3em;
        width: 3em;
    }
</style>