<template>
  <div class="Home">
    <div class="row align-items-center">
      <div class="container">
        <div class="row mt-5">

          <div class="col align-self-center">
            <div class="card text-center bg-light">
              <div class="card-body">
                <h5 class="card-title">¿Que sera lo proximo que haras?</h5>
                <p class="card-text">Encuentra tu proxima gran experiencia lo mas cerca de ti</p>
                <a href="#" class="btn btn-primary">Empezar ya</a>
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
          <div class="col align-self-center">
            <Mapa/>
          </div>
        </div>
        
      </div>

    </div>
  </div>
  
</template>

<script>
import Mapa from '../components/Mapa.vue';
import CarruselLugares from '../components/CarruselLugares.vue';

export default {
  name: "Home",
  components: {
    Mapa,
    CarruselLugares
  }
};
</script>
