<template>
    <div class="container">
        <div class="row mb-5 mt-5">
            <div class="col">
                <h2>Mis Lugares</h2>
            </div>
        </div>
        <div ref="listActividades" class="list-group">
            <h4 v-if="lugares.length==0">"No tienes lugares registrados."</h4>
            <div
                v-else
                v-for="(lugar,id) in lugares" :key="id"
                class="list-group-item list-group-item-action" 
            >
                <div class="d-flex w-100 justify-content-between"> 
                    <h5 class="mb-1">
                        <router-link :to="'/MisLugares/'+lugar.id">{{lugar.titulo}}</router-link>
                    </h5>
                    <small>{{lugar.direccion}}</small>
                </div>
                <p class="mb-1">
                    {{lugar.descripcion}}
                </p>
                <button @click="eliminarLugar(lugar.id)" class="btn btn-link">
                    <i class="fas fa-trash-alt"></i>
                </button>
                <button class="btn btn-link">
                    <router-link :to="'/MisLugares/'+lugar.id">
                        <i class="fas fa-edit"></i>
                    </router-link>
                </button>
            </div>
        </div>
    </div>

  
</template>

<script>
import axios from 'axios';
export default {
    name:"MisLugares",
    data(){
        return{
            lugares:[] 
        }
    },
    mounted(){
        // Petición de los lugares subidos por el usuario
        axios.get(this.API+'api/user/lugares',{
            headers: {
                'x-access-token': this.$cookies.get('token'),
            }
        })
        .then((response) =>{
            this.lugares=response.data;
            console.log(response.data);
        },(error) => {
            console.log(error.response.data);
        });

    },
    methods:{
        eliminarLugar:function(id){
            axios.delete(this.API+'api/'+id,{
                headers: {
                    'x-access-token': this.$cookies.get('token'),
                }
            })
            .then((response) =>{
                console.log(response.data);
                // Petición de los lugares subidos por el usuario
                axios.get(this.API+'api/user/lugares',{
                    headers: {
                        'x-access-token': this.$cookies.get('token'),
                    }
                })
                .then((response) =>{
                    this.lugares=response.data;
                    console.log(response.data);
                },(error) => {
                    console.log(error.response.data);
                });
            },(error) => {
                console.log(error.response.data);
            });
        }
    }


}
</script>

<style scoped>

</style>