<template>
  <div id="app">

    <!-- Header -->
    <header>
      <BarraDeMenu :sesionInit="$cookies.get('token')" nombreApp="Barcelona desconocida"/>
    </header>
    <!-- Body (En esta parte se renderizara el contenido de las paginas) -->
    <main>
      <router-view />
    </main>
    
  
    <!-- Footer -->
    <footer>
      <Footer/>
    </footer>
    
    
  </div>
</template>

<script>
import BarraDeMenu from './components/BarraDeMenu.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    BarraDeMenu,
    Footer
  },
  methods: {
  }
}
</script>

<style lang="scss">
  header{

    /* position: absolute;
    width: 100%; */


    position: relative;
    z-index: 2;

  }
  /* main{
    padding-top:9.1em;
  } */
    
</style>
