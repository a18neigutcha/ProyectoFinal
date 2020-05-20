<template>
  <div class="container">

    
    <InfoUser :userName="datosUser.userName" :email="datosUser.email"/>
        

    <div class="container">
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
    import InfoUser from "../components/InfoUser";
    export default {
        name: "UserPage",
        components: {
            InfoUser
        },
        data() {
            return {
                datosUser:{
                    id: 8,
                    userName: "Cameron",
                    email: "Cameron@gmail.com",
                    password: "secret"
                }
            }
        }
    }
    

</script>


<style scoped>
    img{
        height: 100%;
    }
    
</style>
