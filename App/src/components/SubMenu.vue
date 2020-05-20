<template>
    <ul class="nav pt-2 pb-2">
        <!-- Item Inicio -->
        <li class="nav-item">
            <router-link class="nav-link" to="/">
                <i class="fas fa-home"></i>
                Inicio
            </router-link> 
        </li>
        <!-- Item Mapa -->
        <li class="nav-item">
            <router-link class="nav-link" to="/ViewMapa">
                <i class="fas fa-map-marked-alt"></i>  
                Mapa
            </router-link> 
        </li>

        <!-- Item Recomendaciones (sole se mostrara si la sesion se inicio.) -->
        <li v-show="sesionInit" class="nav-item">
            <router-link class="nav-link" to="/Recomendaciones">Recomendaciones</router-link> 
        </li>
    </ul>
    
</template>

<script>
export default {
  name: "SubMenu",
  props: {
      sesionInit: String
  }
};
</script>
<style scoped>

</style>