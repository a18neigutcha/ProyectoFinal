<template>
    <div class="container-fluid ">
        <!-- Barra de la cabecera -->
        <div class="row">
            <div class="col">
                <div class="navbar navbar-expand-lg navbar-light ">
                    <!-- Logo de la pagina web -->
                    <router-link class="navbar-brand mb-0 h1" to="/">
                        <img src="@/assets/logo.png" class="logoImg" alt="Logo de Barcelona desconocida">
                        {{nombreApp}}
                    </router-link>

                    <!-- Button despliega menu en pagina redimensionada -->
                    <button class="navbar-toggler justify-content-end" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
                        <ul class="navbar-nav ">
                            <!-- Item Api -->
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="http://localhost:3000">Api</a>
                            </li>
                            <!-- Item Help -->
                            <li class="nav-item mx-3">
                                <router-link class="nav-link" to="/Ayuda">Help</router-link>
                            </li>
                            <!-- Item Registrarte -->
                            <li class="nav-item mx-3">
                                <router-link class="nav-link" to="/SignUp">Registrate</router-link>
                            </li>
                            <!-- Item LogIn (Se muestrs si el no hay una session iniciada) -->
                            <li v-show="!sesionInit" class="nav-item mx-3">
                                <router-link class="nav-link" to="/SignIn">
                                    <i v- class="fas fa-sign-in-alt"></i>
                                    Inicia sesión
                                    
                                </router-link>
                            </li>
                            <!-- Item User (Solo se muestra si el usuario inicio sesión) -->
                            <li v-show="sesionInit" class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    <i v- class="fas fa-user"></i>
                                </a>
                                <!-- Opciones de usuario. -->
                                <div class="dropdown-menu">
                                    <router-link class="dropdown-item" to="/UserPage">Tu perfil</router-link>
                                    <router-link class="dropdown-item" to="/Configuracion">Configuración</router-link>
                                    <button class="dropdown-item" @click="logOut()">Cerrar sesión</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>            
        </div>
        <!-- Barra de subMenu -->
        <div class="row">
            <div class="col">
                <SubMenu :sesionInit="$cookies.get('token')"/>
            </div>
            
        </div>
    </div>
   
</template>

<script>

    import SubMenu from "./SubMenu.vue";

    export default {
        name: 'BarraDeMenu',
        props: {
            nombreApp: String,
            sesionInit: String

        },
        components: {
            SubMenu,
        },
        methods: {
            logOut: function(){
                this.$cookies.remove("token");
                this.sesionInit = this.$cookies.get("token");
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .logoImg{
        width: 3em;
        height: 3em;
    }
    
</style>
