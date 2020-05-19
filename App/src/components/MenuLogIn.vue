<template>
  <div class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <ul class="navbar-nav ">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        ENTRA
                    </a>
                    <div class="dropdown-menu">
                        <router-link class="dropdown-item" to="/SignIn">Inicia sesión</router-link>
                        <router-link class="dropdown-item" to="/SignUp">Registrate</router-link>
                        <router-link class="dropdown-item" to="/UserPage">Panel Usuario</router-link>
                    </div>
                </li>
                <li class="nav-item ml-3">
                    
                    <router-link class="nav-link" to="/Sesion">
                        <i class="fas fa-sign-in-alt"></i>
                    </router-link>
                </li>
                                <li class="nav-item mx-3">
                    <router-link class="nav-link" to="/Api/Documentacion">Api</router-link>
                </li>
                <li class="nav-item mx-3">
                    <router-link class="nav-link" to="/Ayuda">Help</router-link>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: "MenuLogIn"
    };
</script>
<style>
    .navbar {
         border: none;
         box-shadow: 0 1px 20px 0 rgba(0,0,0,.1);
         width: 200%;
       }
</style>