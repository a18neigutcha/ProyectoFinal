<template>
  <div class="container">
      <!-- Titulo -->
      <div class="row">
          <h3>{{datosLugar.nombre}}</h3>
      </div>
      <div class="row">
          <Mapa :datos="[datosLugar]"/>
      </div>
      <!-- Informacion complementaria -->
      <div class="row">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, laborum cupiditate, nostrum suscipit quidem fugiat asperiores consectetur esse quas magnam nemo. Esse, quasi nemo! Labore voluptate maiores iste fugit numquam?
      </div>
      <!-- Historias/Noticias -->
      <div class="row">
          <div>
              <h5>Noticia titulo</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et consectetur ratione ullam nostrum ducimus quos voluptatibus fuga porro! Voluptatibus quasi quidem magni, culpa autem aperiam voluptatem velit fugiat quo fugit!</p>
          </div>
      </div>

  </div>
</template>

<script>

    import axios from "axios";
    import Mapa from "../components/Mapa";

    export default {
        name:"LugarInfo",
        components:{
            Mapa
        },
        data(){
            return {
                datosLugar:{}
            }
        },
        mounted () {
            axios.get('http://barcelonadesconocida.tk:3000/api/'+this.$route.params.id,)
            .then(response =>{
                this.datosLugar=response.data;
                console.log(response.data);
            })

        }
    }
</script>

<style>

</style>