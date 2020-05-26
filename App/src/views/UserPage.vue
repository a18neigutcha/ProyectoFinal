<template>
  <div id="UserPage" class="container-fluid">

      <div class="row">
          <div class="col-2"></div>
          <div class="col">
            <div id="info-user" class="d-flex justify-content-start align-items-center">
                <img v-if="user.fotoPerfil" :src="user.fotoPerfil" class="iconUser" alt="Imagen del usuario.">
                <img v-else src="@/assets/img/user_default.svg" class="iconUser" alt="Imagen del usuario.">
                <div class="mx-4" >
                    <h1 class="m-0">{{user.userName}}</h1>
                    <p>{{user.email}}</p>
                </div>
                <div @click="configurarTuUsuario()" class="config">
                    <i class="fas fa-cog"></i>
                </div>
                
            </div>
          </div>
          <div class="col-4"></div>
      </div>
       

    <div class="row mt-5">
        <div class="col-2"></div>
        <div class="col">
            <div class="panel-user">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-mis-lugares" role="tab" aria-controls="nav-home" aria-selected="true">Mis Lugares</a>
                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-mis-historias" role="tab" aria-controls="nav-profile" aria-selected="false">Mis Historias</a>
                        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-favoritos" role="tab" aria-controls="nav-contact" aria-selected="false">Favoritos</a>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-mis-lugares" role="tabpanel" aria-labelledby="nav-home-tab">
                        <MisLugares/>
                    </div>
                    <div class="tab-pane fade" id="nav-mis-historias" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <p>"La funcionalidad de historias no esta disponible"</p>
                    </div>
                    <div class="tab-pane fade" id="nav-favoritos" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <p>"La opcion de favoritos no esta disponible"</p>
                    </div>
                </div>

            </div>

            
        </div>
        <div class="col-2"></div>
    </div>
    

    <!-- Atribuciones -->
    <!-- <div class="row">
        <div class="col">
            Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>
        </div>

    </div> -->
    


  </div>
</template>

<script>
    import axios from "axios";
    import MisLugares from "../views/MisLugares";
    export default {
        name: "UserPage",
        components: {
            // InfoUser
            MisLugares
        },
        data() {
            return {
                user:{},
                userLugares:[]  
            }
        },
        mounted(){
            // Petición de los datos del usuario.
            axios.get('http://localhost:3000/api/sesion/me',{
                headers: {
                'x-access-token': this.$cookies.get('token'),
                }
            })
            .then((response) =>{
                this.user=response.data;
                console.log(response.data);
            },(error) => {
                    console.log(error.response.data);
            });


            // Petición de los lugares subidos por el usuario
            axios.get('http://localhost:3000/api/user/lugares',{
                headers: {
                    'x-access-token': this.$cookies.get('token'),
                }
            })
            .then((response) =>{
                this.userLugares=response.data;
                console.log(response.data);
            },(error) => {
                console.log(error.response.data);
            });

        },
        methods:{
            configurarTuUsuario:function(){
                //Redirige al inicio.
                this.$router.push("/Configuracion");
            }
        }
    }
    

</script>


<style scoped>
    #UserPage{
        background-image: url("https://cdn.stocksnap.io/img-thumbs/960w/rural-road_DHQEELXOQZ.jpg");
        background-repeat: no-repeat;
        padding-top: 6em;
        height: 70em;
        background-size: cover;

    }
    .iconUser{
        width: 9em;
        height: auto;
    }
    #info-user{
        border:1px solid;
        background-color: rgba(255, 255, 255, 0.644);
        padding: 1em;
    }
    .config{
        position: absolute;
        top:1em;
        right: 2em;

    }
    .panel-user{
        background-color: white;
        padding: 1em;
        border:1px solid rgb(197, 197, 197) ;
        height: 40em;
    }
</style>
