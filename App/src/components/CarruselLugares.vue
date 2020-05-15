<template>

        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card-deck">
                        <CartaLugar
                            v-for="(lugar,id) in datos" :key="id"
                            :titulo="lugar.nombre"
                            :subtitulo="lugar.direccion"
                            :descripcion="lugar.descripcion"
                            :dirUrl="lugar.dirUrl"
                        ></CartaLugar>   
                    </div>
                </div>
                
                    
            </div>
        </div>

</template>

<script>
import CartaLugar from './CartaLugar';
import axios from 'axios';

export default {
  name: 'CarruselLugares',
  components:{
      CartaLugar
  },
  data:function() {
      return {
          datos:{
              titulo:"",
              subtitulo:"",
              descripcion:"",
              url:""

          },
          axx:0
      }
      

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
