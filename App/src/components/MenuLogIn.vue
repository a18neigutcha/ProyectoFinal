<template>
  <div class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav ">
                <li class="nav-item mx-3">
                    <a class="nav-link" href="http://localhost:3000">Api</a>
                </li>
                <li class="nav-item mx-3">
                    <router-link class="nav-link" to="/Ayuda">Help</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        <i v- class="fas fa-sign-in-alt"></i>
                         Entra
                        
                    </a>
                    <div class="dropdown-menu">
                        <router-link class="dropdown-item" to="/SignIn">Inicia sesión</router-link>
                        <router-link class="dropdown-item" to="/SignUp">Registrate</router-link>
                        <router-link class="dropdown-item" to="/UserPage">Panel Usuario</router-link>
                    </div>
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