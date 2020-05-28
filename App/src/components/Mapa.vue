<template>
  <l-map style="height: 350px" :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker
      v-for="(lugar,id) in datos" :key="id"
      :lat-lng="[lugar.latitud,lugar.longitud]" 
    >
      <l-tooltip :options="{ permanent: true, interactive: true }">
        <!-- Opcion de mostrar los datos con modal -->
        <!-- <div 
          data-toggle="modal" 
          :data-target="'#staticBackdrop'+lugar.id" 
        >
          {{lugar.titulo}}
        </div> -->
        <!-- Opcion de mostrar los datos en sus respectiva pagina -->
        <router-link :to="'/LugarInfo/'+lugar.id">{{lugar.titulo}}</router-link>
      </l-tooltip>

    </l-marker>
    <!-- Modal -->
    <!-- <div
      v-for="(lugar,id) in datos" :key="id"
      class="modal fade" :id="'staticBackdrop'+lugar.id" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">{{lugar.titulo}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{lugar.descripcion}}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <router-link class="btn btn-primary" data-dismiss="modal" :to="'/LugarInfo/'+lugar.id">
                Ver más
            </router-link>
          </div>
        </div>
      </div>
    </div> -->
  </l-map>
  

</template>

<script>

import {LMap, LTileLayer, LMarker,LTooltip} from 'vue2-leaflet';
import axios from 'axios';

export default {
  name: "Mapa",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 14,
      center: [41.3887901, 2.1589899],
      markerLatLng: [41.3893700, 2.1752900],
      datos: null

    };
  },
  mounted () {
    axios.get('http://barcelonadesconocida.tk:3000/api/',{
    })
    .then(response =>{
        this.datos=response.data;
        console.log(response.data);
    })
  },
  methods: {
    innerClick() {
      alert("Click!");
    }
  }

}

</script>
<style scoped>
    
</style>

