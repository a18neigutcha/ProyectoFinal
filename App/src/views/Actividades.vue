<template>
  
    <div class="container">
        <!-- Buscador -->
        <div class="row">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
                </div>
            </div>
        </div>
        <!-- Mapa -->
        <div class="row">
            <Mapa/>
        </div>

            
    
    </div>

</template>

<script>

import Mapa from '../components/Mapa';

export default {
    name:"Actividades",
    components:{
        Mapa
    }

}
</script>

<style>

</style>