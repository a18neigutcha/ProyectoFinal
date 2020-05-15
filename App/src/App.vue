<template>
  <div id="app">
    <header>
      <BarraDeMenu nombreApp="Barcelona desconocida"/>
    </header>
    
    <router-view />
    <div class="row align-items-end">
      <div class="col">
        <Footer/>
      </div>
    </div>
    
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
  }
}
</script>

<style lang="scss">

    
</style>
