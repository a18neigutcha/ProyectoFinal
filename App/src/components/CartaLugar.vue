<template>
    <div class="cartaLugar text-center">
        <img :src="imagen" alt="imagen del lugar oculto">
        <div class="cont-info">
            <h1>{{titulo}}</h1>
            <h4>{{subtitulo}}</h4>
            <p>{{descripcion}}</p>
        </div>
        <!--  <a href="#" class="btn btn-primary">Card link</a> -->
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
        top: 40%;
        width: 100%;
        color: white;
    }
    .cont-info h1,h4,p{
        
        color: white;
    }

    .cartaLugar{
        width: 30em;
        position: relative;
    }
    .cartaLugar img{
        width: 100%;
        height: 30em;
    }
</style>
