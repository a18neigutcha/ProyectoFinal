<template>
    <v-container>
      <v-layout row>
          <v-flex xs12 sm6 m4 offset-xs0 offset-sm3 offset-m4>
              <v-form class=SignIn>
                  <v-text-field label="Email Usuario"  name="username" type="text" v-model="input.email" ></v-text-field>
                  <v-text-field label="Contraseña" name="password" type="password" v-model="input.password"></v-text-field>
                  <v-btn block color="button" v-on:click="submit()">Inicia Sesión </v-btn>
              </v-form>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<!--     <div id="SignIn">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.email" placeholder="Email Usuario" />
        <input type="password" name="password" v-model="input.password" placeholder="Contraseña" />
        <button type="button" v-on:click="submit()">Inicia Sesión</button>
    </div> -->

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
                    console.log(response.data);
                },(error) => {
                    console.log(error.response.data);
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