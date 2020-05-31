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
                        class="list-group-item list-group-item-action border" 
                    >
                        <div class="d-flex w-100 justify-content-between"> 
                            <h5 class="mb-1">
                                <router-link class="direction" :to="'/LugarInfo/'+lugar.id">{{lugar.titulo}}</router-link>
                            </h5>
                            <small>{{lugar.direccion}}</small>
                        </div>
                        <p class="mb-1">
                            {{lugar.descripcion}}
                        </p>
                        <button type="button" class="btn btn-outline-primary mt-3">
                            <i class="fas fa-thumbs-up" style="color:#ff7e0c;"></i>
                            <span class="ml-2 badge badge-light">{{lugar.valoracion}}</span>
                        </button>
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
        axios.get(this.API+'api/')
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
        background-image: url("http://getwallpapers.com/wallpaper/full/f/d/b/430292.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        opacity: 1.0;
        height: 80em;
        font-family: 'Numans', sans-serif;
        
    }
    #cont-list{
        background-color: rgba(0, 0, 0, 0.521);
        border-radius: 20px;
        padding: 1em;
        background: linear-gradient(to right, rgba(214, 89, 50, 0.568), rgba(192, 29, 29, 0.541));
        border-bottom: 1px black;
    }

    .btn{
        background-color:#25f9c9;
        font-weight: 900;
        border-color: #25f9c9;
    }
    .btn:hover{
        background-color:#25f9c775;
        font-weight: 900;
        border-color: #25f9c78e;
    }
    .direction{
        color : #ff7e0c;
    } 

</style>