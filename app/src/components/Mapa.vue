<template>
  <l-map style="height: 350px" :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker
      v-for="(lugar,id) in datos" :key="id"
      :lat-lng="[lugar.latitud,lugar.longitud]" 
    >
      <l-tooltip :options="{ permanent: true, interactive: true }">
        <div @click="innerClick">
          {{lugar.nombre}}
        </div>
      </l-tooltip>
    </l-marker>
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
    axios.get('http://localhost:3000/api/',{
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        }
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

