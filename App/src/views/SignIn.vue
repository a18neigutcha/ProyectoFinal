<template>
    <div id="SignIn">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.email" placeholder="Email Usuario" />
        <input type="password" name="password" v-model="input.password" placeholder="Contraseña" />
        <button type="button" v-on:click="submit()">Inicia Sesión</button>
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
              axios.post('http://localhost:3000/api/signIn',{
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
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>