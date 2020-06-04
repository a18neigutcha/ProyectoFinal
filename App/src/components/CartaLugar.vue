<template>
    <div class="cartaLugar text-center">
        <img :src="imagen" alt="imagen del lugar oculto">
        <div class="cont-info">
            <h1>{{titulo}}</h1>
            <h4>{{subtitulo}}</h4>
            
        </div>
        <!-- <p>{{descripcion}}</p> -->
    </div>
</template>

<script>
export default {
  name: 'CartaLugar',
  props: {
      titulo: String,
      subtitulo: String,
      descripcion: String,
      imagen: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .cont-info{
        position: absolute;
        top: 50%;
        bottom: 70%;
        width: 100%;
        color: white;
        
    }
    .cartaLugar p{
        position: absolute;
        top:3em;
        left: 35%;
        color: white;

    }
    .cont-info h1,h4{
        
        -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; font-family: 'Overpass', sans-serif; letter-spacing: 5px; font-size: 30px; color: white; font-weight: 900;
    }
    .p{
        top: 200%;
    }

    .cartaLugar{
        width: 30em;
        position: relative;
        
    }
    .cartaLugar img{
        width: 100%;
        height: 30em;
        object-fit: cover;
        filter: blur(0px) saturate(2);

        
    }
</style>
