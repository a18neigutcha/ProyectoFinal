<template>
  <div class="container">

    
    <InfoUser :userName="user.userName" :email="user.email" class="mt-5"/>
        

    <div class="mt-5">
        <h3>Mis Lugares</h3>
        <br>
        <div class="list-group">

            <h4 v-if="userLugares.length==0">"No tienes lugares registrados."</h4>
            <router-link
                v-else
                v-for="(lugar,id) in userLugares" :key="id"
                class="list-group-item list-group-item-action" 
                :to="'/'+lugar.id"
            >
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{lugar.titulo}}</h5>
                    <small>3 days ago</small>
                </div>
                <p class="mb-1">
                    {{lugar.descripcion}}
                </p>
            </router-link>
        </div>
    </div>


  </div>
</template>

<script>
    import axios from "axios";
    import InfoUser from "../components/InfoUser";
    export default {
        name: "UserPage",
        components: {
            InfoUser
        },
        data() {
            return {
                user:{},
                userLugares:[
                    {
                        id:1,
                        titulo:"Titulo",
                        descripcion:"Descripcion",
                        url:"www.google.com"
                    },
                    {
                        id:2,
                        titulo:"Titulo",
                        descripcion:"Descripcion",
                        url:"www.google.com"
                    }
                ]  
            }
        },
        mounted(){
            // Petición de los datos del usuario.
            axios.get('http://localhost:3000/api/sesion/me',{
                headers: {
                'x-access-token': this.$cookies.get('token'),
                }
            })
            .then((response) =>{
                this.user=response.data;
                console.log(response.data);
            },(error) => {
                    console.log(error.response.data);
            });


            // Petición de los lugares subidos por el usuario
            axios.get('http://localhost:3000/api/user/lugares',{
                headers: {
                    'x-access-token': this.$cookies.get('token'),
                }
            })
            .then((response) =>{
                this.userLugares=response.data;
                console.log(response.data);
            },(error) => {
                console.log(error.response.data);
            });

        }
    }
    

</script>


<style scoped>
    
</style>
