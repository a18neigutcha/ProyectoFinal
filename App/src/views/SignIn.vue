<template>
<div class="fondo">
    <div id="SignIn" class="container">
        <div class="d-flex justify-content-center h-100">
            <div class="card">
                <div class="card-header">
                    <h3>Inicio de Sesión</h3>
                    <div class="d-flex justify-content-end social_icon">
                        <span><i class="fab fa-facebook-square"></i></span>
                        <span><i class="fab fa-google-plus-square"></i></span>
                        <span><i class="fab fa-twitter-square"></i></span>
                    </div>
                </div>
                <div class="card-body">
                    <form>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                            </div>
                            <input type="text" name="username" class="form-control"  v-model="input.email" placeholder="Email Usuario">
                            
                        </div>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                            </div>
                            <input type="password" class="form-control" v-model="input.password" placeholder="Contraseña">
                
                        </div>
                        <div class="row align-items-center remember">
                            <input type="checkbox">Recuérdame
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn float-right login_btn" v-on:click="submit()">Entra</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-center links">
                        No tienes cuenta?<router-link to="/SignUp">Regístrate</router-link>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="#">¿Olvidaste la contraseña?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>


<script>

import axios from 'axios';

export default {
    name: "SignIn",
    data() {
        return {
            input: {
                email: "",
                password: ""
            },
            user: null
        }
 
  },
  methods: {
      submit:function(){
          if(this.email==""){
              alert("El usuario no está registrado");
          }else{
              axios.post('http://barcelonadesconocida.tk:3000/api/signIn',{
                    email: this.input.email,
                    password: this.input.password
                })
                .then((response) => {
                    //Crea el token de la sesion de usuario.
                    this.$cookies.set("token",response.data.token);

                    //Redirige al inicio.
                    this.$router.push("/");

                     this.$emit("inicioSesion", true);

                },(error) => {
                    console.log(error.response.data);
                    alert("Credenciales erroneas");
                });
            }
        }
          
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*     #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
} */

@import url('https://fonts.googleapis.com/css?family=Numans');

.fondo{
background-image: url('http://getwallpapers.com/wallpaper/full/e/8/5/694108-download-free-owl-city-wallpaper-1920x1200.jpg');
background-size: cover;
background-repeat: no-repeat;
height: 700px;
font-family: 'Numans', sans-serif;
}

.container{
height: 80%;
align-content: center;
}

.card{
height: 370px;
margin-top: auto;
margin-bottom: auto;
width: 400px;
background-color: rgba(0,0,0,0.5) !important;
}

.social_icon span{
font-size: 50px;
margin-left: 10px;
color: #ff7e0c;
}

.social_icon span:hover{
color: white;
cursor: pointer;
}

.card-header h3{
color: white;
}

.social_icon{
position: absolute;
right: 20px;
top: -45px;
}

.input-group-prepend span{
width: 50px;
background-color: #25f9c9;
color: black;
border:0 !important;
}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;

}

.remember{
color: white;
}

.remember input
{
width: 20px;
height: 20px;
margin-left: 15px;
margin-right: 5px;
}

.login_btn{
color: black;
background-color: #25f9c9;
width: 100px;
}

.login_btn:hover{
color: black;
background-color: white;
}

.links{
color: white;
}

.links a{
margin-left: 4px;
}
</style>