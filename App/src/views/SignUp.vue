<template>

        <div class="fondo">
        <div id="SignUp" class="container">
            <div class="d-flex justify-content-center h-100">
                <div class="card">
                    <div class="card-header">
                        <h3>Regístrate</h3>
                    </div>
                    <div class="card-body">
                        <form>       
                            <p v-if="errors.length">
                                <b>Please correct the following error(s):</b>
                                <ul>
                                <li v-for="(error,id) in errors" :key="id">{{ error }}</li>
                                </ul>
                            </p>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input id="userName" type="text" name="username" class="form-control"  v-model="userName" placeholder="Usuario">
                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-mail"></i></span>
                                </div>
                                <input type="email" name="email" class="form-control" input id="email" v-model="email" placeholder="Email">
                                
                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" class="form-control" v-model="password" placeholder="Contraseña">
                    
                            </div>
                                <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <label for="confirmaPassword" class="form-control"> Confirma tu password: </label>
                                    <input id="confirmaPassword" v-model="confirmaPassword" name="confirmaPassword">
                            </div>
                            <div class="form-group">
                                <button type="button" class="btn float-right login_btn" @click="createUser()">Regístrate</button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-center links">
                            ¿Ya tienes cuenta?<router-link to="/SignIn">Inicia Sesión</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--     <div id="SignUp">

        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
            <li v-for="(error,id) in errors" :key="id">{{ error }}</li>
            </ul>
        </p>

        <p>
            <label for="userName">User name: </label>
            <input id="userName" v-model="userName" type="text" name="userName">
        </p>

        <p>
            <label for="email">Email: </label>
            <input id="email" v-model="email" type="email" name="email">
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

        </div> -->

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
<style scoped>
/*     .formulario {
         border: none;
         box-shadow: 0 5px 20px 0 rgba(0,0,0,.1);
         width: 100%;
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
color: #FFC312;
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
background-color: #FFC312;
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
background-color: #FFC312;
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