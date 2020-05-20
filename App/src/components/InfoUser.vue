<template>
  <div class="container">
    <!-- Informacion del usuario. -->

    <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
            <div class="col-md-4">
            <img src="@/assets/logo.png" class="card-img" alt="Imagen del usuario.">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{{userName}}</h5>
                <p class="card-text">Email: {{email}}</p>
            </div>
            </div>
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

</style>