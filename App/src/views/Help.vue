<template>
  <div id="Help" class="container-fluid">
      <div class="row mb-5">
          <div class="col">
              <h2>El equipo</h2>
          </div> 
      </div>
      <div class="row mb-5 d-flex justify-content-center">
            <div class="col-sm">
                <div class="cont-persona">
                    <img src="@/assets/img/user_default.svg" alt="Imagen de miembro del equipo">
                        <h6 class="mt-2 text-center">Neil Gutierrez Chacon</h6>
                        <p class="text-center text-muted">Desarrollador BackEnd</p>
                </div>
            </div>

            <div class="col-sm-5">
                <div class="cont-persona">
                    <img src="@/assets/img/user_default.svg" alt="Imagen de miembro del equipo">
                    <h6 class="mt-2 text-center">Alejandro Estrada</h6>
                    <p class="text-center text-muted">Diseñador web</p>
                </div>
            </div>
      </div>
      <div class="row pt-5">
            <div id="Recursos" class="col mx-auto">
                <img src="@/assets/img/js.svg" alt="js">
                <img src="@/assets/img/html5.svg" alt="html5">
                <img src="@/assets/img/css.svg" alt="css">
                <img src="@/assets/img/vue.svg" alt="vue">
                <img src="@/assets/img/mysql.svg" alt="mysql">
                <img src="@/assets/img/docker.svg" alt="dockers">
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
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email@ejemplo.com">
                </div>
                <div class="form-group row">
                    <label for="exampleFormControlTextarea1">¿Cual es su incidencia?</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <!-- Button submit -->
                <div class="form-group row pb-3">
                    <div class="col-4"></div>
                    <div class="col-4 d-flex justify-content-center">
                        <button v-on:click.prevent="post" class="btn btn-primary">Envia</button>
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
        align-content: center;
        text-align: center;
        background-repeat: no-repeat;
        position: relative;
    }

    #Help::before {
        content: "";
        opacity: 0.8;
        position: absolute;
        background-size: cover;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-image: url('http://getwallpapers.com/wallpaper/full/2/6/6/524405.jpg');
        filter: grayscale(40%) blur(0.2px);
    }
    #info-grupo{
        height: 18em;
    }
    

    #Recursos{
        background: rgb(97, 54, 54);  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, rgb(97, 54, 54), rgb(97, 54, 54));  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, rgba(214, 89, 50, 0.568), rgba(192, 29, 29, 0.541)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
    }
    #Recursos img{
        width: 70px;
        height: 70px;
        /* border-radius: 50%;
        font-size: 14px;
        line-height: 45px;
        display: inline-block;
        background: #ebeef5;
        text-align: center;
        -webkit-transition: all 0.2s linear;
        -o-transition: all 0.2s linear;
        transition: all 0.2s linear; */
        margin: 2em;
    }
    /* .logos{
       width: 46px;
        height: 46px;
        border-radius: 50%;
        font-size: 14px;
        line-height: 45px;
        display: inline-block;
        background: #ebeef5;
        text-align: center;
        -webkit-transition: all 0.2s linear;
        -o-transition: all 0.2s linear;
        transition: all 0.2s linear;
    } */
    #Incidencias{
        height: 20em;
        margin-bottom: 5rem; 
        color:black;
        font-family: 'Numans';
        padding: 2em;
    }

    #Incidencias:hover{
        height: 20em;
        margin-bottom: 5rem; 
        color:black;
        font-family: 'Numans';
        background: linear-gradient(to right, rgba(214, 89, 50, 0.568), rgba(192, 29, 29, 0.541));
        padding: 2em;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border: 2px rgba( 214, 89, 50, 0.568);
        border-radius: 12px;
    }
    h3,form{
        color:white;
        font-family: 'Numans';
        align-content: center;
        font-size: larger;
    }

    .cont-persona{
        margin-bottom: 5em;
    }
    .cont-persona img{
        border-radius: 200px 200px 200px 200px;
        -moz-border-radius: 200px 200px 200px 200px;
        -webkit-border-radius: 200px 200px 200px 200px;
        border: 10px solid #d4d4d4;
        height: 4em;
    }

    .btn-primary{
        margin-top: 2em;
        background-color:rgba( 214, 89, 50, 0.568);
        border-color:rgba( 214, 89, 50, 0.568);
    }

    @media (min-width: 200px) { 
        .cont-persona img{
            height: 4em;
        }
    }

    /* // Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) { 
        .cont-persona img{
            height: 5em;
        }
    }

    /* // Small devices (landscape phones, 576px and up) */
    @media (min-width: 681px) { 
        .cont-persona img{
            height: 6em;
        }
    }

    /* // Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) { 
        .cont-persona img{
            height: 7em;
        }
    }

    @media (min-width: 878px) { 
        .cont-persona img{
            height: 8em;
        }
    }

    /* // Large devices (desktops, 992px and up) */
    @media (min-width: 992px) { 
        .cont-persona img{
            height: 9em;
        }
     }

    /* // Extra large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) { 
        .cont-persona img{
            height: 11em;
        }
     }

     


</style>