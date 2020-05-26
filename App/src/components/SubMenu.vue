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
        <!-- <li class="nav-item">
            <router-link class="nav-link" to="/ViewMapa">
                <i class="fas fa-map-marked-alt"></i>  
                Mapa
            </router-link> 
        </li> -->

        <!-- Item Recomendaciones (sole se mostrara si la sesion se inicio.) -->
        <li class="nav-item">
            <router-link class="nav-link" to="/Actividades">
                <i class="fas fa-hiking"></i>
                Actividades
            </router-link> 
        </li>
        <li v-show="sesionInit" class="nav-item">
            <router-link class="nav-link" to="/MisLugares">
                Mis Lugares
            </router-link> 
        </li>
        <li v-show="sesionInit" class="nav-item">
            <router-link class="nav-link" to="/AgregarActividades">
                <i class="fas fa-plus"></i>
                Añadir
            </router-link> 
        </li>
        <!-- Item Búsqueda de lugares registrados en nuestra base de datos -->
        <!-- <li class="nav-item">
            <input type="text" name="search"  v-model="search" placeholder="Busca tu lugar escondido">
            <button type="button" v-on:click="filteredPacks()">Búsqueda</button>
        </li> -->
    </ul>

    
    
</template>

<script>

export default {
    name: "SubMenu",
    props: {
        sesionInit: String
    },

    methods: {
        filteredPacks:function(){

            return this.packs.filter((pack) => {
                return pack.name.toLowerCase().match(this.search);
            })
        }
            
    }
};
</script>
<style scoped>

</style>