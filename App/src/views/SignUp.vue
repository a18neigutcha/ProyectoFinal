<template>
    <div id="creationForm">
        <validator name="validator">
            <form id="SignUp">
                <h1>Registro de Usuario</h1>
                <input type="text" name="username" v-model="input.userName" placeholder="Nombre Usuario" />
                <input type="email" name="email" v-validate:email="{required: true, minlength: 8}" v-model="input.email" placeholder="Escribe tu correo electrónico" />
                <input type="password" name="password" v-model="input.password" placeholder="Contraseña" />
                <input type="password" name="confirmaPassword" v-model="input.confirmaPassword" placeholder="Confirma Contraseña" />
                <button type="button" v-on:click="CreateUser()">Regístrate</button>
            </form> 
            <p v-if="$validator.email.required">Provide an email</p>
        </validator>
    </div>
</template>

W
<script>

    import axios from 'axios';

    export default {
        name: "SignUp",
        data() {
            return {
                input: {
                    userName:"",
                    email: "",
                    password: "",
                    confirmaPassword: ""
                },
                user: null
            }
    
    },
    methods: {
        CreateUser:function(){
            axios.post('http://localhost:3000/api/signUp',{
                    email: this.input.email,
                    password: this.input.password
                })
                .then((response) => {
                    console.log(response.data);

                    //Redirige al inicio
                    this.$route.push("@/Home");

                },(error) => {
                    console.log(error.response.data);
                    alert("Usuario no registrado!")
                });
                
        },
        validators: {
            checkSamePasswords: function(val) {
                return val == this.input.confirmaPassword;
            }
        }
        
        
    }
            
}

</script>
/* <input type="submit" value="Create user" v-if="$validator.valid"/>

<p v-if="$validator.email.required">Provide an email</p>
<p v-if="$validator.email.email">Please provide a valid email adress</p>
<p v-if="$validator.email.checkUserExists">This email is already in use</p> */

<style>
    .formulario {
         border: none;
         box-shadow: 0 5px 20px 0 rgba(0,0,0,.1);
         width: 100%;
    }
</style>