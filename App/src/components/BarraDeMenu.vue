<template>

<div class="header">
        <!-- Barra de la cabecera -->
        <nav class="navbar navbar-expand-md">
            <!-- Logo de la pagina web -->
            <div class="mx-auto order-0">
                <router-link class="navbar-brand mx-auto" to="/">
                    <img src="@/assets/logo2.png" class="logoImg" alt="Logo de Barcelona desconocida">
                </router-link>
            </div>
    
            <!-- Button despliega menu en pagina redimensionada -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
            </button>
            <div class="navbar-collapse collapse w-85 order-1 order-md-0 dual-collapse2">
                <ul class="navbar-nav mr-auto">
                    <!-- Item Inicio -->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">
                            <i class="fas fa-home"></i>
                            Inicio
                        </router-link> 
                    </li>

                    <!-- Item Recomendaciones (sole se mostrara si la sesion se inicio.) -->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/Actividades">
                            <i class="fas fa-hiking"></i>
                            Actividades
                        </router-link> 
                    </li>
                    <li v-show="sesionInit" class="nav-item">
                        <router-link class="nav-link" to="/MisLugares">
                            <i class="fas fa-globe-europe"></i>
                            Mis Lugares
                        </router-link> 
                    </li>
                    <li v-show="sesionInit" class="nav-item">
                        <router-link class="nav-link" to="/AgregarActividades">
                            <i class="fas fa-plus"></i>
                            Añadir
                        </router-link> 
                    </li>

                </ul>
            </div>
            <div id="navbarSupportedContent" class="navbar-collapse collapse w-85 order-3 dual-collapse2">
                <ul class="navbar-nav ml-auto">
                    <!-- Item Api -->
                    <li class="nav-item">
                        <a class="nav-link" :href="API">
                            <i class="fas fa-book"></i> 
                            Api
                        </a>
                    </li>
                    <!-- Item Help -->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/Help">
                            <i class="fas fa-users-cog"></i>
                            Help
                        </router-link>
                    </li>
                    <!-- Item Registrarte -->
                    <li v-show="!sesionInit" class="nav-item">
                        <router-link class="nav-link" to="/SignUp">
                            <i class="fas fa-walking"></i>
                            Registrate
                        </router-link>
                    </li>
                    <!-- Item LogIn (Se muestra si el no hay una session iniciada) -->
                    <li v-show="!sesionInit" class="nav-item">
                        <router-link class="nav-link" to="/SignIn">
                            <i v- class="fas fa-sign-in-alt"></i>
                            Inicia sesión
                            
                        </router-link>
                    </li>
                    <!-- Item User (Solo se muestra si el usuario inicio sesión) -->
                    <li id="itemUser" v-show="sesionInit" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            <i v- class="fas fa-user"></i>
                        </a>
                        <!-- Opciones de usuario. -->
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <router-link class="dropdown-item" to="/UserPage">
                                <i class="far fa-id-card"></i>
                                Tu perfil
                            </router-link>
                            <router-link class="dropdown-item"  to="/ConfigUser">
                                <i class="fas fa-cog"></i>
                                Configuración
                            </router-link>
                            <div class="dropdown-divider"></div>
                            <button class="dropdown-item" @click="logOut()">
                                <i class="fas fa-sign-out-alt"></i>
                                Cerrar sesión
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
            
        </nav>
    </div>

    
   
</template>



<script>

    export default {
        name: 'BarraDeMenu',
        props: {
            nombreApp: String,
            sesionInit: String

        },
        components: {
        },
        methods: {
            logOut: function(){
                this.$cookies.remove("token");
                this.sesionInit = this.$cookies.get("token");
                this.$router.push("/");
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .logoImg{
        height: 6em;
    }
    .header{
        background: #000000;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #030303, rgb(97, 54, 54));  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #030303, rgb(97, 54, 54)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        opacity: 0.8;
        /* height: 8em; */
    }
    a.nav-link{
        color: white;
    }
    #itemUser{
        position: relative;
        z-index:1020;
    }

</style>
