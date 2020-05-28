<template>
  
    <div id="Actividades" class="Actividades container-fluid">
        <!-- Buscador -->
        <div class="row pt-5">
            <div class="col-1"></div>
            <div class="col">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Busca tu proxima actividad" aria-label="Busca tu proxima actividad" aria-describedby="button-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-outline-light" type="button" id="button-addon2">Buscar</button>
                    </div>
                </div>
            </div>
            
            <div class="col-1"></div>
        </div>
        <!-- Mapa -->
        <div class="row">
            <div class="col-1"></div>
            <div class="col">
                <Mapa class="rounded"/>
            </div>
            <div class="col-1"></div>
            
        </div>
        <div class="row mt-5">
            <div class="col-1"></div>
            <div id="cont-list" class="col">
                <div class="list-group">
                    <h3 class="text-light mb-3">
                        <strong>
                        Actividades recomendadas:
                        </strong>
                    </h3>
                    <div
                        v-for="(lugar,id) in lugares" :key="id"
                        class="list-group-item list-group-item-action" 
                    >
                        <div class="d-flex w-100 justify-content-between"> 
                            <h5 class="mb-1">
                                <router-link :to="'/LugarInfo/'+lugar.id">{{lugar.titulo}}</router-link>
                            </h5>
                            <small>{{lugar.direccion}}</small>
                        </div>
                        <p class="mb-1">
                            {{lugar.descripcion}}
                        </p>
                    </div>
                </div>
                <!-- Pagination -->
                <nav class="mt-3" aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#cont-list" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#cont-list">1</a></li>
                        <li class="page-item"><a class="page-link" href="#cont-list">2</a></li>
                        <li class="page-item"><a class="page-link" href="#cont-list">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#cont-list" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <div class="col-1"></div>
        </div>

            
    
    </div>

</template>

<script>
import axios from 'axios';
import Mapa from '../components/Mapa';

export default {
    name:"Actividades",
    components:{
        Mapa
    },
    data(){
        return{
            lugares:[] 
        }
    },
    mounted(){
        // Petición de los lugares recomendados
        axios.get('http://localhost:3000/api/')
        .then((response) =>{
            this.lugares=response.data;
            console.log(response.data);
        },(error) => {
            console.log(error.response.data);
        });

    },

}
</script>

<style scoped>
    .Actividades{
        background-image: url("https://images.pexels.com/photos/3769146/pexels-photo-3769146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        opacity: 1.0;
        height: 68em;
    }
    #cont-list{
        background-color: rgba(0, 0, 0, 0.521);
        border-radius: 20px;
        padding: 1em;
    }
</style>