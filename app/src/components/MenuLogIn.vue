<template>
  <div class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav ">
                <li class="nav-item mx-3">
                    <router-link class="nav-link" to="/Api/Documentacion">Api</router-link>
                </li>
                <li class="nav-item mx-3">
                    <router-link class="nav-link" to="/Ayuda">Help</router-link>
                </li>
                <li class="nav-item mx-3">
                    <router-link class="nav-link" to="/Registro">Registrate</router-link>
                </li>
                <li class="nav-item ml-3">
                    
                    <router-link class="nav-link" to="/Sesion">
                        <i class="fas fa-sign-in-alt"></i>
                    </router-link>
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