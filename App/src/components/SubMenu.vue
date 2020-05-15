<template>
    <ul class="nav pt-2 pb-2">
        <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link> 
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/ViewMapa">Mapa</router-link> 
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/Recomendaciones">Recomendaciones</router-link> 
        </li>
    </ul>
</template>

<script>
export default {
  name: "SubMenu"
};
</script>
<style scoped>

</style>