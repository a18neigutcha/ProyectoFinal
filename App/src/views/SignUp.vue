<template>
  <v-container>
      <v-layout row>
          <v-flex xs12 sm6 m4 offset-xs0 offset-sm3 offset-m4>
              <v-form class=formulario>
                  <v-text-field label="Nombre de Usuario"></v-text-field>
                  <v-text-field label="Email"></v-text-field>
                  <v-text-field label="Contraseña" type="password"></v-text-field>
                  <v-text-field label="Confirmar Contraseña" type="password"></v-text-field>
                  <v-btn block color="button" v-on:click="submit()">Regístrate! </v-btn>
                  <!-- <v-btn block color="primary" @click="$router.push('/principal')">Registro de Usuario</v-btn> -->
              </v-form>
          </v-flex>
      </v-layout>
  </v-container>
</template>


<script>

    import axios from 'axios';

    export default {
        name: "SignUp",
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
            axios.post('http://localhost:3000/api/signUp',{
                    email: this.input.email,
                    password: this.input.password
                })
                .then((response) => {
                    console.log(response.data);

                    //Redirige al inicio
                    this.$route.push("/");

                },(error) => {
                    console.log(error.response.data);
                    alert("Usuario no registrado!")
                });
            }
    }
            
}

</script>

<style>
    .formulario {
         border: none;
         box-shadow: 0 5px 20px 0 rgba(0,0,0,.1);
         width: 100%;
    }
</style>