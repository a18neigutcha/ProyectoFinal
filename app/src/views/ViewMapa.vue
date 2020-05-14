<template>
    <div class="ViewMapa">
        <div class="container-fluid mt-3">
            <Mapa/>
        </div>
    </div>
</template>
<script>

import Mapa from "../components/Mapa.vue";

export default {
    name: "ViewMapa",
    components: {
        Mapa
    }
}
</script>