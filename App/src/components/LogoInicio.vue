<style>
     .navbar {
         border: none;
         box-shadow: 0 1px 20px 0 rgba(0,0,0,.1);
    }
</style>

<template>
    <div class="navbar navbar-light">
        <router-link class="navbar-brand mb-0 h1" to="/">
            <img src="@/assets/logo.png" alt="Logo de Barcelona desconocida">
            {{titulo}}
        </router-link>
    </div>
    
</template>

<script>
export default {
  name: "LogoInicio",
  props: {
    titulo: String
  }
};
</script>
<style>
    img{
        width: 3em;
        height: 3em;
    }
</style>