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
        <li v-show="sesionInit" class="nav-item">
            <router-link class="nav-link" to="/Actividades">
                <i class="fas fa-hiking"></i>
                Actividades
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

/* import axios from 'axios'; */

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

/*             axios.post('http://localhost:3000/api/',{
                search: this.input.search
            })
            .then((response) => {


            },(error) => {
                console.log(error.response.data);
                alert("No hay resultados");
            }); */

        }
          
  }
};
</script>
<style scoped>

</style>