<template>
  <div id="Help" class="container-fluid">
      <!-- https://www.flaticon.es/resultados?word=javascript -->
      <div class="row mb-5">
          <div class="col-2"></div>
          <div id="info-grupo" class="col">
            <h3>Nuestro equipo</h3>
            <div class="row pt-5 mb-5">
                <div class="col"></div>
                <div class="col">
                    <div class="cont-persona">
                        <img src="@/assets/img/user_default.svg" alt="Imagen de miembro del equipo">
                            <h6 class="mt-2 text-center">Neil Gutierrez Chacon</h6>
                            <p class="text-center text-muted">Desarrollador BackEnd</p>
                    </div>
                </div>
                <div class="col">
                    <div class="cont-persona">
                        <img src="@/assets/img/user_default.svg" alt="Imagen de miembro del equipo">
                        <h6 class="mt-2 text-center">Alejandro Estrada</h6>
                        <p class="text-center text-muted">Diseñador web</p>
                    </div>
                </div>
                <div class="col"></div>
            </div>
              
          </div>
          <div class="col-2"></div>
      </div>
      <div class="row pt-5">
          <div id="Recursos" class="col">

          </div>
      </div>
      <div class="row pt-5">
          <div class="col-3"></div>
          <div id="Incidencias" class="col">
            <div class="row">
                <h3>Incidencias</h3>
            </div>
            
            <form>
                <div class="form-group row">
                    <label for="exampleFormControlInput1">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="form-group row">
                    <label for="exampleFormControlTextarea1">¿Cual es su incidencia?</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <!-- Button submit -->
                <div class="form-group row pb-3">
                    <div class="col-4"></div>
                    <div class="col-4 d-flex justify-content-center">
                        <button v-on:click.prevent="post" class="btn btn-primary">Sign in</button>
                    </div>
                    <div class="col-4"></div>
                </div>
            </form>
          </div>
          <div class="col-3"></div>
      </div>
  </div>
</template>

<script>
export default {
    name:"Help",


}
</script>

<style scoped>

    #Help{
        padding-top: 6em;
    }
    #info-grupo{
        height: 20em;
    }

    #Recursos{
        height: 20em;
        background: #141E30;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
    #Incidencias{
        height: 20em;
    }
    .cont-persona{
        margin-bottom: 5em;
    }
    .cont-persona img{
        border-radius: 200px 200px 200px 200px;
        -moz-border-radius: 200px 200px 200px 200px;
        -webkit-border-radius: 200px 200px 200px 200px;
        border: 10px solid #d4d4d4;
        height: 11em;
        width: 100%;
    }

</style>