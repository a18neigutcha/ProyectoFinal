<template>
  <div id="UserPage" class="container-fluid">

      <div class="row d-flex  justify-content-center align-items-center">
        <div id="info-user"  class="col-5 mb-3 d-flex flex-wrap justify-content-center align-items-center">
            <img v-if="user.fotoPerfil" :src="user.fotoPerfil" class="iconUser" alt="Imagen del usuario.">
            <img v-else src="@/assets/img/user_default.svg" class="iconUser" alt="Imagen del usuario.">
            <div class="mx-4" >
                <h1 class="text-center">{{user.userName}}</h1>
                <p>{{user.email}}</p>
            </div>
            <div @click="configurarTuUsuario()" class="config">
                <i class="fas fa-cog"></i>
            </div>
            
        </div>
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
                    <div class="tab-pane fade p-auto" id="nav-mis-historias" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div class="container">
                                <div class="row pt-5">
                                    <div class="col d-flex justify-content-center align-items-center flex-column">
                                        <img src="@/assets/img/trabajo.svg" alt="Imagen de trabajador">
                                        <p>"Lo sentimos esta funcionalidad esta en desarrollo."</p>
                                    </div>
                                </div>
                            </div>
                            
                    </div>
                    <div class="tab-pane fade" id="nav-favoritos" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div class="container">
                                <div class="row pt-5">
                                    <div class="col d-flex justify-content-center align-items-center flex-column">
                                        <img src="@/assets/img/trabajo.svg" alt="Imagen de trabajador">
                                        <p>"Lo sentimos esta funcionalidad esta en desarrollo."</p>
                                    </div>
                                </div>
                            </div>
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
            axios.get(this.API+'api/sesion/me',{
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
            axios.get(this.API+'api/user/lugares',{
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
                this.$router.push("/ConfigUser");
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
        width: 5em;
        height: auto;
    }
    #info-user{
        border:1px solid;
        background-color: rgba(255, 255, 255, 0.644);
        padding: 1em;
        /* margin-left: 2em;
        margin-right: 2em; */
    }
    #info-user h1,p{
        margin-top:1em;
        font-size: 0.6em;
        
    }
    .config{
        position: absolute;
        top:1em;
        right: 1em;

    }
    .panel-user{
        background-color: white;
        padding: 1em;
        border:2px solid rgb(146, 146, 146) ;
        height: 40em;
        border-style: inset;
    }
    #nav-mis-historias img{
        height: 15em;
        width: 15em;
    }
    #nav-favoritos img{
        height: 15em;
        width: 15em;
    } 

    /* // Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) { 
        /* #info-user{
            margin-left: 3em;
            margin-right: 3em;
        } */
        #info-user h1,p{
            font-size: 1em;
            
        }
     }

    /* // Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {
        .iconUser{
            width: 9em;
            height: auto;
        }
     }

    /* // Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {

     }

    /* // Extra large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) {
        #info-user h1,p{
            font-size: 1.5em;
            
        }
     } 
</style>
