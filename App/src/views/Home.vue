<template>
  <div class="Home">
    <div class="row align-items-center">
      <div class="container-fluid">

        <div class="row">
          <div class="col">
            <div class="card text-center bg-dark text-white b-0 rounded-0">
              <img src="http://getwallpapers.com/wallpaper/full/f/d/b/430292.jpg" class="card-img imagenPortada" alt="imagen de fondo de portada.">  
              <div class="card-img-overlay d-flex justify-content-center align-items-center">
                <div>
                    <h5 class="card-title">¿Que sera lo proximo que haras?</h5>
                    <p class="card-text">Encuentra tu proxima gran experiencia lo mas cerca de ti</p>
                    <router-link class="btn btn-primary" to="/SignIn">
                        Empezar
                        <i class="fas fa-arrow-right"></i>
                    </router-link> 
                </div>    
              </div>

            </div>
          </div>
        </div>

        <div class="card-section">
        <div class="container">
            <div class="card-block bg-white mb30">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <!-- section-title -->
                        <div class="section-title mb-0">
                            <h2>Lugares destacados</h2>
                            <p>Los últimos lugares que os recomendamos, las mejores actualizaciones de nuestros usuarios y equipo. </p>
                        </div>
                        <!-- /.section-title -->
                    </div>
                </div>              
              </div>
            </div>
            <CarruselLugares/>
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
  }
};
</script>

<style scoped>
  .imagenPortada{
    height: 30em;
  }
  body { -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; font-family: 'Overpass', sans-serif; letter-spacing: 0px; font-size: 17px; color: #8d8f90; font-weight: 400; line-height: 32px; background-color: #edefef; }
  h1, h2, h3, h4, h5, h6 { color: #25292a; margin: 0px 0px 10px 0px; font-family: 'Overpass', sans-serif; font-weight: 700; letter-spacing: -1px; line-height: 1; }
  h1 { font-size: 34px; }
  h2 { font-size: 28px; line-height: 38px; }
  h3 { font-size: 22px; line-height: 32px; }
  h4 { font-size: 20px; }
  h5 { font-size: 17px; }
  h6 { font-size: 12px; }
  p { margin: 0 0 20px; line-height: 1.7; }
  p:last-child { margin: 0px; }
  a { text-decoration: none; color: #8d8f90; -webkit-transition: all 0.3s; -moz-transition: all 0.3s; transition: all 0.3s; }
  a:focus, a:hover { text-decoration: none; color: #f85759; }



/*   .page-header { background: url(https://easetemplate.com/free-website-templates/hike/images/pageheader.jpg)no-repeat; position: relative; background-size: cover; }
  .page-caption { padding-top: 170px; padding-bottom: 174px; } */
  .page-title { font-size: 46px; line-height: 1; color: #fff; font-weight: 600; text-align: center; }

  .card-section { position: relative; bottom: 60px; }
  .card-block { padding: 80px; padding-bottom: 20px; }
  .section-title { margin-bottom: 0px; }

/*   .carousel{
    padding: 0;
    margin: 0;
  } */
</style>