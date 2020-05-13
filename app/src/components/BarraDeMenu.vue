<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link class="navbar-brand" to="/">{{nombreApp}}</router-link> 
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Inicio</router-link> 
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Mapa">Mapa</router-link> 
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Recomendaciones">Recomendaciones</router-link> 
                </li>
            </ul>
        </div>


        <div>
            <ul class="nav justify-content-end">
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
                    <router-link class="nav-link btn btn-dark" to="/Sesion">Mi cuenta</router-link>
                </li>
            </ul>

        </div>
    </nav>

</template>

<script>
export default {
  name: 'BarraDeMenu',
  props: {
    nombreApp: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
