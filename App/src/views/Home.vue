<template>
  <div class="Home">
    <div class="row align-items-center">
      <div class="container-fluid">

        <div class="row">
          <div class="col">
            <div class="card text-center bg-dark text-white ">
              <img src="@/assets/img/fondo.jpg" class="card-img imagenPortada" alt="imagen de fondo de portada.">  
              <div class="card-img-overlay d-flex justify-content-center align-items-center">
                <div>
                    <h5 class="card-title">¿Que sera lo proximo que haras?</h5>
                    <p class="card-text">Encuentra tu proxima gran experiencia lo mas cerca de ti</p>
                    <a href="#" class="btn btn-primary">Empezar ya</a>
                </div>    
              </div>
            </div>
          </div>
        </div>


        <div class="row mt-3">

          <div class="col align-self-center">
            <CarruselLugares/>
          </div>

        </div>

        <div class="row mt-3">

        </div>

      </div>

    </div>
  </div>
  
</template>

<script>
import CarruselLugares from '../components/CarruselLugares.vue';

export default {
  name: "Home",
  components: {
    CarruselLugares
  },
  methods: {
    verificarLogIn:function(){
      console.log(this.$cookies.get("token"));
    }
  }
};
</script>

<style scoped>
  .imagenPortada{
    height: 30em;
  }
</style>