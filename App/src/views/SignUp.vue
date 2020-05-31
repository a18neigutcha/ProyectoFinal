<template>

        <div class="fondo">
        <div id="SignUp" class="container">
            <div class="d-flex justify-content-center h-100">
                <div class="card">
                    <div class="card-header">
                        <h3>Registro de Usuario</h3>
                        
                    </div>
                                            <div class="d-flex justify-content-center links">
                            ¿Ya tienes cuenta?<router-link to="/SignIn">Inicia Sesión</router-link>
                        </div>
                        <div class="card-footer">
                            <p v-if="errors.length">
                            <b>Corrige estos errore(s):</b>
                                <ul>
                                <li v-for="(error,id) in errors" :key="id">{{ error }}</li>
                                </ul>
                            </p>    
                    </div>


                    <div class="card-body">
 
                        <form>       
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
                                <input type="password" class="form-control" v-model="confirmaPassword" placeholder="Confirma contraseña">
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                                <label class="form-check-label" for="invalidCheck">
                                    Acepto los términos y condiciones
                                </label>
                                <div class="invalid-feedback">
                                    Debes aceptar los términos y condiciones antes de aceptar.
                                </div>
                                                            <div class="form-group">
                                <button type="button" class="btn float-right login_btn" @click="createUser()">Registro</button>
                            </div>                                        

                            </div>

                        </form>
                    </div>

                    
                </div>
            </div>
        </div>
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
                axios.post(this.API+'api/signUp',{
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
height: 530px;
margin-top: auto;
margin-bottom: auto;
width: 400px;
background-color: rgba(0,0,0,0.5) !important;
}

.card-footer{
    margin-top: auto;
margin-bottom: auto;
}

p{
    color: white;
}

.form-check{
color: white;

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
background-color: #25f9c9 ;
color: black;
border:0 !important;
}

input:focus{
outline: 10px #25f9c9  !important;
box-shadow: 0 0 10px rgba(81, 203, 238, 1)!important; 
}

.login_btn{
color: black;
background-color: #25f9c9;
width: 120px;
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