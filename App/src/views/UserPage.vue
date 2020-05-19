<template>
  <div class="UserPage">
    

    <div class="container-fluid">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                <img src="@/assets/logo.png" class="card-img" alt="Imagen del usuario.">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{user.userName}}</h5>
                    <p class="card-text">Email: {{user.email}}</p>
                </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <h3>Mis Lugares</h3>
        <br>
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active">
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small>3 days ago</small>
                </div>
                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small>Donec id elit non mi porta.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
                </div>
                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small class="text-muted">Donec id elit non mi porta.</small>
            </a>
        </div>
    </div>


  </div>
</template>

<script>

    export default {
        name: "UserPage",
        components: {
        },
        data() {
            return {
                user:{
                    id: 8,
                    userName: "Cameron",
                    email: "Cameron@gmail.com",
                    password: "secret"
                },
                contenido: 1
            }
        },
        methods:{
            mensajeTest:function(){
                alert("Estoy vivo");
            },
            cambiarContenido:function(opcion){
                this.contenido=opcion;
            }

        }

 
    }
    

</script>


<style scoped>
    img{
        height: 100%;
    }
    
</style>
