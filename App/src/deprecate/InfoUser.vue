<template>
  <div class="container">
    <!-- Informacion del usuario. -->
    <div class="row">
            
        <div class="col d-flex justify-content-start align-items-center">
            <img src="@/assets/logo.png" class="iconUser" alt="Imagen del usuario.">
            <h2 class="ml-2">{{userName}} ({{email}})</h2>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"InfoUser",
    props:{
        userName:String,
        email:String
    },

}
</script>

<style>
    .iconUser{
        width: 4em;
        height: 4em;
    }
</style>