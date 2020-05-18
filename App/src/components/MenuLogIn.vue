import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import UserPage from "../views/UserPage.vue";
<style>
     .navbar {
         border: none;
         box-shadow: 0 1px 20px 0 rgba(0,0,0,.1);
         width: 400%;
         height: 100%;
    }

</style>


<template>
  <div class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav ">
                <li class="nav-item ml-3">
                  <form class="form-inline" action="/action_page.php">
                        <input class="form-control mr-sm-2" type="text" placeholder="Encuentra lugares  ">
                        <button class="btn btn-success" type="submit">Búsqueda</button>
                    </form>
                </li>   
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        ENTRA
                    </a>
                    <div class="dropdown-menu">
                        <router-link class="dropdown-item" to="/Login">Inicia sesión</router-link>
                        <router-link class="dropdown-item" to="/Registro">Registrate</router-link>
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

</style>