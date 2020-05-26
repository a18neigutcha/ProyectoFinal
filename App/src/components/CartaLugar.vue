<template>
    <div class="card text-center p-0 border-0 rounded-0 m-0">
        <div class="card-body pt-0 pl-0 pr-0">
            <img :src="imagen" class="card-img-top" alt="imagen del lugar oculto">
            <h5 class="card-title mt-4">{{titulo}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{subtitulo}}</h6>
            <p class="card-text">{{descripcion}}</p>
           <!--  <a href="#" class="btn btn-primary">Card link</a> -->
        </div>
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

/*     img {
        width: 100%;
        height: 120%    ;
        padding: 0;
    } */
</style>
