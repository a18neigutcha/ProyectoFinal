<template>
    <div id="ConfigUser" class="container-fluid">
        <div class="row">
            <div class="col-2"></div>
            <div class="col">
                <div id="info-user" class="d-flex justify-content-start align-items-center">
                    <img v-if="user.fotoPerfil" :src="user.fotoPerfil" class="iconUser" alt="Imagen del usuario.">
                    <img v-else src="@/assets/img/user_default.svg" class="iconUser" alt="Imagen del usuario.">
                    <div class="mx-4" >
                        <h1 class="m-0">{{user.userName}}</h1>
                        <p>{{user.email}}</p>
                    </div>
                    <div @click="configurarTuUsuario()" class="config">
                        <i class="fas fa-cog"></i>
                    </div>
                    
                </div>
            </div>
            <div class="col-4"></div>
        </div>
        <div class="row mt-5">
            <div class="col-2"></div>
            <div class="col">
                <form
                    @submit="checkForm"
                    class="config-form"
                >
                    <div class="row">
                        <div class="col">
                            <h3 class="titulo mb-5">Modifica tus datos</h3>
                            <!-- lista errores -->
                            <p v-if="errors.length">
                                <b>Please correct the following error(s):</b>
                                <ul>
                                    <li v-for="(error,id) in errors" :key="id">{{ error }}</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputUserName" class="col-sm-2 col-form-label">User name:</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control-plaintext" id="inputUserName" v-model="user.userName">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail" class="col-sm-2 col-form-label">Email: </label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control-plaintext" id="inputEmail" v-model="user.email">
                            <div class="form-check mt-3 mb-3">
                                <input class="form-check-input" type="checkbox" v-model="modifPassword" id="inputModifPassword">
                                <label class="form-check-label" for="inputModifPassword">
                                    Cambia tu password
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div v-show="modifPassword" class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Password: </label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" v-model="password">
                        </div>
                    </div>
                    
                    <div v-show="modifPassword" class="form-group row">
                        <label for="inputNewPassword" class="col-sm-2 col-form-label">New password: </label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputNewPassword" v-model="newPassword">
                        </div>
                    </div>
                    <div v-show="modifPassword" class="form-group row">
                        <label for="inputConfirmNewPassword" class="col-sm-2 col-form-label">Confirm new password: </label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputConfirmNewPassword" v-model="confirmNewPassword">
                        </div>
                    </div>
                    <!-- Input imagen -->
                    <div class="form-group row">
                        <div class="col">
                            <label for="imagen" class="label-imagen">
                                Subir imagen:  
                                <img src="@/assets/img/input_image.svg" alt="Sube tu imagen"> 
                            </label>
                            <input type="file" accept="image/*" @change="uploadImage($event)" class="imagen">
                        </div> 
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
            <div class="col-2"></div>
        </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "ConfigUser",
    data(){
        return{
            /* Errores */
            errors: [],

            /* Datos usuario */
            user:{},
            password:"",
            newPassword:"",
            confirmNewPassword:"",
            imagenPerfil:"",

            /* Confirmaciones */
            modifPassword:false

        }
    },
    mounted(){
        // Petición de los datos del usuario.
        axios.get('http://localhost:3000/api/sesion/me',{
            headers: {
            'x-access-token': this.$cookies.get('token'),
            }
        })
        .then((response) =>{
            this.user=response.data;
            console.log(response.data);
        },(error) => {
                console.log(error.response.data);
        });
    },
    methods:{
        checkForm: function (e) {
            this.errors = [];

            if (!this.user.userName) {
                this.errors.push("User name requerido");
            }else if (!this.user.email) {
                this.errors.push("Email requerido");
            }else if (!this.password && this.modifPassword){
                this.errors.push("Password requeridas.");
            }else if (!this.newPassword && this.modifPassword){
                this.errors.push("Nuevo password requerida");
            }else if (!this.confirmNewPassword && this.modifPassword){
                this.errors.push("Confirma tu nuevo password requerida");
            }

            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();
        },
        post:function(){
            if(this.checkForm()){

                let body = new FormData();
                body.append('userName', this.user.userName);
                body.append('email', this.user.email);
                body.append('modifPassword', this.modifPassword);
                body.append('password', this.password);
                body.append('newPassword', this.newPassword);
                body.append('confirmNewPassword',this.confirmNewPassword);
                body.append('imagen', this.user.imagenPerfil);
                
                console.log(body);


                axios.put(this.API+'api/sesion/me',body,{
                    headers: {
                        'accept': 'application/json',
                        'Accept-Language': 'en-US,en;q=0.8',
                        'Content-Type': `multipart/form-data; boundary=${body._boundary}`,
                        'x-access-token': this.$cookies.get('token'),
                    }
                })
                .then((response) => {
                    console.log(response.data);

                    //Redirige al inicio.
                   this.$router.push("/UserPage");


                },(error) => {
                    console.log(error.response.data);
                });
            }
        },
    }

}
</script>

<style scoped>
    #ConfigUser{
        background-image: url("https://cdn.stocksnap.io/img-thumbs/960w/rural-road_DHQEELXOQZ.jpg");
        background-repeat: no-repeat;
        padding-top: 6em;
        height: 70em;
        background-size: cover;

    }
    .iconUser{
        width: 9em;
        height: auto;
    }
    #info-user{
        border:1px solid;
        background-color: rgba(255, 255, 255, 0.644);
        padding: 1em;
    }
    .config{
        position: absolute;
        top:1em;
        right: 2em;

    }
    .config-form{
        background-color: white;
        padding: 2em;
    }

    .config-form .titulo{
        color: black;
    }

</style>