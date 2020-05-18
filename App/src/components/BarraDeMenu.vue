<template>
    <div class="container-fluid p-0">
        <div class="row">
            <div class="col ">
                <LogoInicio :titulo="nombreApp"/>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-center">
                <MenuLogIn/>
            </div>  
        </div>
        <div class="row">
            <div class="col">
                <SubMenu/>
            </div>
            
        </div>
        
    </div>
   
</template>

<script>

import SubMenu from "./SubMenu.vue";
import MenuLogIn from "./MenuLogIn.vue";
import LogoInicio from "./LogoInicio.vue";

export default {
  name: 'BarraDeMenu',
  props: {
    nombreApp: String
  },
  components: {
    SubMenu,
    MenuLogIn,
    LogoInicio
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
