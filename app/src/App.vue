<template>
  <div id="app">
    <div class="row align-items-start">
      <div class="col">
        <BarraDeMenu nombreApp="Localizalo"/>
      </div>
    </div>
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
