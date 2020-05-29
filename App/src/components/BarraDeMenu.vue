<template>

<div class="header">
        <!-- Barra de la cabecera -->
        <nav class="navbar navbar-expand-md">
            <!-- Logo de la pagina web -->
            
            <router-link class="navbar-brand" to="/">
                <img src="@/assets/logo2.png" class="logoImg" alt="Logo de Barcelona desconocida">
            </router-link>
            <!-- Button despliega menu en pagina redimensionada -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-5 pr-5">
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
                <ul id="subMenu" class="navbar-nav">
                    <!-- Item Api -->
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000">
                            <i class="fas fa-book"></i>
                            Api
                        </a>
                    </li>
                    <!-- Item Help -->
                    <li class="subItem nav-item mx-3">
                        <router-link class="nav-link" to="/Help">
                            <i class="fas fa-users-cog"></i>
                            Help
                        </router-link>
                    </li>
                    <!-- Item Registrarte -->
                    <li v-show="!sesionInit" class="subItem nav-item mx-3">
                        <router-link class="nav-link" to="/SignUp">
                            <i class="fas fa-walking"></i>
                            Registrate
                        </router-link>
                    </li>
                    <!-- Item LogIn (Se muestra si el no hay una session iniciada) -->
                    <li v-show="!sesionInit" class="subItem nav-item mx-3">
                        <router-link class="nav-link" to="/SignIn">
                            <i v- class="fas fa-sign-in-alt"></i>
                            Inicia sesión
                            
                        </router-link>
                    </li>
                    <!-- Item User (Solo se muestra si el usuario inicio sesión) -->
                    <li v-show="sesionInit" class="subItem nav-item mx-3 dropdown">
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
    #navbarSupportedContent{
        position: relative;
    }
    /* #subMenu{
        position: absolute;
        right: 5%;
    } */
    /* #item-user div.open{
        position: absolute;
        z-index: 2;
    } */
    /* div > div.dropdown.show {
        position: absolute;
    } */

    /* div > div.dropdown.open {
        position: absolute;
    } */
    /* .separator{
        width: 25em;
    } */
    /* .nav-link{
        color: #ff7e0c;
    } */

/*     .header-wrapper{

    background: #f5f5f5; 
    width: 100%; }
    div.site-description div.row div.col-sm-4 div.pull-right div#simple-social-icons-3.widget.simple-social-icons{ margin-top: 5px;}

    @media (min-width: 768px) {
    .navbar-left {
        float: left !important;
    }
    .navbar-right {
        float: right !important;
        margin-right: -15px;
    }
    .navbar-right ~ .navbar-right {
        margin-right: 0;
    }
    .dropdown-menu > .active > a, .dropdown-menu > .active > a:focus, .dropdown-menu > .active > a:hover {
        background-color: #00AAD4;
        background-image: linear-gradient(to bottom, #00AAD4 0px, #00AAD4 100%);
        background-repeat: repeat-x;
    }
    }
    .navbar-default {
        background-color: transparent;
        border-color: transparent;
    }
    .navbar-default .navbar-brand {color: #00AAD4;
    }
    .navbar-default .navbar-brand:focus, .navbar-default .navbar-brand:hover {
        background-color: transparent;
        color: #5e5e5e;
    }
    .navbar-default .navbar-text {color: #00AAD4;
    }

    .navbar-default .navbar-nav > li > a:focus, .navbar-default .navbar-nav > li > a:hover {
        background-color: transparent;
        color: #333;
    }
    .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:focus, .navbar-default .navbar-nav > .active > a:hover {
        background-color: #00AAD4;
        color: #fff;
    }
    .navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:focus, .navbar-default .navbar-nav > .disabled > a:hover {
        background-color: transparent;
        color: #ccc;
    }
    .navbar-default .navbar-toggle {
        border-color: #00AAD4;
    }
    .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
        background-color: #ddd;
    }
    .navbar-default .navbar-toggle .icon-bar {
        background-color: #00AAD4;
    }
    .navbar-default .navbar-collapse, .navbar-default .navbar-form {
            border-color: transparent;
    }
    .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:focus, .navbar-default .navbar-nav > .open > a:hover {
        border-color: transparent;
        color: #555;
    }
    @media (max-width: 767px) {
    .navbar-default .navbar-nav .open .dropdown-menu > li > a {color: #00AAD4;
    }
    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus, .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover {
        background-color: transparent;
        color: #333;
    }
    .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover {
        background-color: #e7e7e7;
        color: #555;
    }
    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover {
        background-color: transparent;
        color: #ccc;
    }
    .navbar .navbar-nav .open .dropdown-menu > .active > a, .navbar .navbar-nav .open .dropdown-menu > .active > a:focus, .navbar .navbar-nav .open .dropdown-menu > .active > a:hover {
        background-image: linear-gradient(to bottom, #000 0px, #00AAD4 100%);
        background-repeat: repeat-x;
        color: #fff;
    }
    }
    .navbar-default .navbar-nav > li > a {color: #00AAD4;
    text-transform: uppercase; font-size: 12px;}
    .navbar-default {
        background-image: linear-gradient(to bottom, transparent 0px, transparent 100%);
        background-repeat: repeat-x;
        border-radius: 0px;
        box-shadow: 0 0px 0 rgba(255, 255, 255, 0.15) inset, 0 0px 0px rgba(0, 0, 0, 0.075);
    }
    .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .open > a {
    background-image: linear-gradient(to bottom, transparent 0px, transparent 100%);
        background-repeat: repeat-x;
        box-shadow: 0 0px 0px rgba(0, 0, 0, 0.075) inset;
    }
    .navbar-brand, .navbar-nav > li > a {
        text-shadow: 0 0px 0 rgba(255, 255, 255, 0.25);
    }
    @font-face {
        font-family: "ssi-icomoon";
        font-style: normal;
        font-weight: normal;
        src: url("@/font/ssi-icomoon.eot?#iefixssi-texv9a") format("embedded-opentype"), url("../font/ssi-icomoon.woff?ssi-texv9a") format("woff"), url("../font/ssi-icomoon.ttf?ssi-texv9a") format("truetype"), url("../font/ssi-icomoon.svg?ssi-texv9a#ssi-icomoon") format("svg");
 } 
    .simple-social-icons {
        overflow: hidden;
    }
    .simple-social-icons ul {
        margin: 0;
        padding: 0;
    }
    .simple-social-icons ul li {
        background: rgba(0, 0, 0, 0) none repeat scroll 0 0 !important;
        border: medium none !important;
        float: left;
        list-style-type: none !important;
        margin: 0 6px 12px !important;
        padding: 0 !important;
    }
    .simple-social-icons ul li a {
        -moz-osx-font-smoothing: grayscale;
        border: medium none !important;
        box-sizing: content-box;
        display: inline-block;
        font-family: "ssi-icomoon";
        font-style: normal !important;
        font-variant: normal !important;
        font-weight: normal !important;
        line-height: 1em;
        text-align: center;
        text-decoration: none !important;
        text-transform: none !important;
        width: 1em;
    }
    .simple-social-icons ul.aligncenter {
        text-align: center;
    }
    .simple-social-icons ul.aligncenter li {
        display: inline-block;
        float: none;
    } */

</style>
