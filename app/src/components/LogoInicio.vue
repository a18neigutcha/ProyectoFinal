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