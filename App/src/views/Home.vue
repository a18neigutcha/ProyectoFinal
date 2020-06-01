<template>
  <div class="Home">
    <div class="row align-items-center">
      <div class="container-fluid">

        <div class="row m-0">
          <div class="col p-0">
            <div class="card text-center bg-dark text-white b-0 rounded-0">
              <img src="http://getwallpapers.com/wallpaper/full/5/8/1/425305.jpg" class="card-img imagenPortada" alt="imagen de fondo de portada.">  
              <div class="card-img-overlay d-flex justify-content-center align-items-center">
                <div>
                    <h5 class="card-title">¿Que será lo próximo que harás?</h5>
                    <p class="card-text">Acércate a experiencias únicas en distintos puntos de tu ciudad</p>
                    <BotonRight/> 
                </div>    
              </div>

            </div>
          </div>
        </div>
        <div class="cont-video">
          <video id="intro" width="100%" height="20%" loop autoplay>
            <source src="@/assets/Bridge.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <audio controls autoplay>
              <source src="@/assets/D5.wav" type="audio/wav">
          </audio>
        </div>
        
        <div class="card-section">
          <div class="container">
            <div class="card-block mb30">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <!-- section-title -->
                        <div class="section-title mb-0">
                            <h2>Destacados</h2>
                            <p>Las localizaciones mejor valoradas, actualizadas en tiempo real nuestros usuarios y equipo. </p>
                        </div>
                        <!-- /.section-title -->
                    </div>
                </div>              
              </div>
            </div>
            <!-- <CarruselLugares/> -->
            <div class="row carousel">
              <div class="col">
                  <slick v-show="lugares.length>0" ref="slick" :options="slickOptions" >
                    <CartaLugar
                      v-for="(lugar,id) in lugares" :key="id"
                      :titulo="lugar.titulo"
                      :subtitulo="lugar.direccion"
                      :descripcion="lugar.descripcion"
                      :imagen="lugar.imagen"
                    ></CartaLugar>   
                  </slick>
                  <div v-show="lugares.length==0">
                    <div class="text-center">
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
   
      </div>

    </div>
  </div>
  
  
</template>

<script>
import axios from 'axios';
import Slick from 'vue-slick';
import CartaLugar from '../components/CartaLugar'
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import BotonRight from '../components/BotonRight';
export default {
  name: "Home",
  components: {
    /* CarruselLugares */
    Slick,
    CartaLugar,
    BotonRight
  },
  data() {
      return {
          lugares:[],
          slickOptions: {
              dots: true,
              slidesToShow: 1,
              infinite: true,
              speed: 300,
              centerMode: true,
              variableWidth: true,
              autoplay: true,
              autoplaySpeed: 2000,

          },
      };
  },
  mounted () {
    axios.get(this.API+'api/')
    .then(response =>{
      /* this.lugares=response.data; */
        this.lugares.push(response.data[0]);
        this.lugares.push(response.data[1]);
        this.lugares.push(response.data[2]);
        console.log(response.data);
    })
  },
  beforeUpdate() {
      if (this.$refs.slick) {
          this.$refs.slick.destroy();
      }
  },
  updated() {
    
    this.$nextTick(function () {
        if (this.$refs.slick) {
            this.$refs.slick.create(this.slickOptions);
        }
    });
  },
  methods: {
    next() {
        this.$refs.slick.next();
    },
    prev() {
        this.$refs.slick.prev();
    },
    
    reInit() {
        // Helpful if you have to deal with v-for to update dynamic lists
        this.$nextTick(() => {
            this.$refs.slick.reSlick();
        });

    },

  },
};
</script>

<style>
  .slick-slide {
    padding-left:0.4em;
    width: 50em;
  }
</style>

<style scoped>
  .imagenPortada{
    height: 30em;
    filter: blur(0px) saturate(2);
    overflow: hidden;
    position: relative;
    opacity: 0.6;
    line-height: 32px;
    object-fit: cover;

  }
 
    body { -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; font-family: 'Overpass', sans-serif; letter-spacing: 0px; font-size: 17px; color: #8d8f90; font-weight: 400; line-height: 32px; background-color: rgba(17, 0, 16, 0.336); text-align: center;  }
    h1, h2, h3, h4, h5, h6 { color: rgba(255, 255, 255, 0.973);; margin: 0px 0px 10px 0px; font-family: 'Overpass', sans-serif; font-weight: 700; letter-spacing: -1px; line-height: 1; }

    h2 { font-size: 28px; line-height: 38px; letter-spacing: 0.8em; } 
    h5 { font-size: 40px; }
    p { margin: 0 0 20px; line-height: 1.7; color:rgba(243, 230, 242, 0.973); font-style: oblique;}
    p:last-child { margin: 0px; }
    a { text-decoration: none; color: #8d8f90; -webkit-transition: all 0.3s; -moz-transition: all 0.3s; transition: all 0.3s; }
    a:focus, a:hover { text-decoration: none; color: #f85759; }

    .card-section {background-color: rgba(17, 1, 16, 0.856); position: relative; bottom: 90px; }
    .card-block {/* background-color:rgba(163, 42, 157, 0.568); */ padding: 80px; padding-bottom: 20px; }
    .section-title { margin-bottom: 0px; text-align: center; margin:auto;}
    .section-title h2{
      font-size: 0.8em;
    }

    /* // Small devices (landscape phones, 576px and up) */
    @media (min-width: 332px) { 
        .section-title h2{
          
          font-size: 1em;
        }
     }

    /* // Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) { 
        .section-title h2{
          font-size: 1.7em;
        }
     }

    /* // Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) { 
        .section-title h2{
          font-size: 2em;
        }
     }

    /* // Large devices (desktops, 992px and up) */
    @media (min-width: 992px) { 
        .section-title h2{
          font-size: 2.5em;
        }
     }


    .carousel{
      margin-top: 2em;
      padding-top: 0em;
      line-height: 20;
      position: relative;
      overflow: hidden;
    } 
    
    .card-text{
      font-size: 20px;
    }
    .btn {		
      position: relative;	
      padding: 1.4rem 4.2rem;
      padding-right: 3.1rem;
      font-size: 1.4rem;
      color: var(--inv);
      letter-spacing: 1.1rem;
      text-transform: uppercase;
      transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);	
      cursor: pointer;
      user-select: none;
    }

    .btn:before, .btn:after {
      content: '';
      position: absolute;	
      transition: inherit;
      z-index: -1;
    }

    .btn:hover {
      color: var(--def);
      transition-delay: .5s;
    }

    .btn:hover:before {
      transition-delay: 0s;
    }

    .btn:hover:after {
      background: var(--inv);
      transition-delay: .35s;
    }
    /* From Right */

    .from-right:before, 
    .from-right:after {
      top: 0;
      width: 0;
      height: 100%;
    }

    .from-right:before {
      left: 0;
      border: 1px solid var(--inv);
      border-left: 0;
      border-right: 0;	
    }

    .from-right:after {
      right: 0;
    }

    .from-right:hover:before,
    .from-right:hover:after {
      width: 100%;
    }
    *, *:before, *:after {
      box-sizing: border-box;
    }
    body {
      --def: #96B7C4; 	
      --inv: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100vh;
      width: 100%;
      background-image: linear-gradient(-25deg, #616161 0%, #96B7C4 100%);
    }
    div {margin-bottom: 3rem;}
    div:last-child {margin-bottom: 0;}

    #intro{
        object-fit: cover;
        height: 300px;
        object-position: 90% 50%;
        filter: saturate(8);
        filter: opacity(90%);
        overflow:hidden;
    } 
    .cont-video{
      position: relative;
      width: 100%;
    }
    audio{
      position: absolute;
      top:1em;
      right: 1em;
      opacity: 0.5;
    }

</style>