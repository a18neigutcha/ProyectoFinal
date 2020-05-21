<template>
    <!-- <div id="creationForm">
        <validator name="validator">
            <form id="SignUp">
                <h1>Registro de Usuario</h1>
                <input type="text" name="username" v-model="input.userName" placeholder="Nombre Usuario" />
                <input type="email" name="email" v-validate:email="{required: true, minlength: 8}" v-model="input.email" placeholder="Escribe tu correo electrónico" />
                <input type="password" name="password" v-model="input.password" placeholder="Contraseña" />
                <input type="password" name="confirmaPassword" v-model="input.confirmaPassword" placeholder="Confirma Contraseña" />
                <button type="button" v-on:click="CreateUser()">Regístrate</button>
            </form> 
        </validator>
    </div> -->
    <div
        id="SignUp"
    >

        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
            <li v-for="(error,id) in errors" :key="id">{{ error }}</li>
            </ul>
        </p>

        <p>
            <label for="userName">User name: </label>
            <input
                id="userName"
                v-model="userName"
                type="text"
                name="userName"
            >
        </p>

        <p>
            <label for="email">Email: </label>
            <input
                id="email"
                v-model="email"
                type="email"
                name="email"
            >
        </p>

        <p>
            <label for="password">Password: </label>
            <input
                id="password"
                v-model="password"
                name="password"
            >
        </p>

        <p>
            <label for="confirmaPassword">Confirma tu password: </label>
            <input
                id="confirmaPassword"
                v-model="confirmaPassword"
                name="confirmaPassword"
            >
        </p>

        <p>
            <button @click="createUser()">Registrarse</button>
        </p>

    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: "SignUp",
        data () {
            return {
                errors: [],
                userName:"",
                email: "",
                password: "",
                confirmaPassword: ""
            }
    
    },
    methods: {
        createUser:function(){
            
            if(this.checkForm()){
                console.log(this.checkForm());
                axios.post('http://localhost:3000/api/signUp',{
                    userName:this.userName,
                    email: this.email,
                    password: this.password
                    
                    
                })
                .then((response) => {
                    console.log(response.data);

                    //Crea el token de la sesion de usuario.
                    this.$cookies.set("token",response.data.token);

                    //Redirige al inicio.
                    this.$router.push("/");

                    this.$emit("inicioSesion", true);

                },(error) => {
                    console.log(error.response.data);
                    alert("Usuario no registrado!")
                });
            }
            
                
        },
        checkForm: function (e) {
            this.errors = [];

            if (!this.userName) {
                this.errors.push("Name required.");
            }
            if (!this.email) {
                this.errors.push('Email required.');
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Valid email required.');
            }else if (!this.password){
                this.errors.push("Password required.");
            }else if (!this.confirmaPassword){
                this.errors.push("Confirm your password");
            }else if(this.password != this.confirmaPassword){
                this.errors.push("Passwords aren't same.");
            }

            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
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