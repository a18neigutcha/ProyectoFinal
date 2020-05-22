<template>
    <!-- Formulario para registrar una actividad -->
    <div class="container">
        <form
            @submit="checkForm"
        >
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="(error,id) in errors" :key="id">{{ error }}</li>
                </ul>
            </p>
            <h3 class="mb-5 mt-5">Añade una actividad</h3>
            <div class="form-group row">
                <label for="titulo" class="col-sm-2 col-form-label">Titulo:</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="titulo" v-model="titulo">
                </div>
            </div>
            <div class="form-group row">
                <label for="direccion" class="col-sm-2 col-form-label">Direccion:</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="direccion" v-model="direccion">
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <label for="latitud">Latitud</label>
                    <input type="text" class="form-control" id="latitud" v-model="latitud">
                </div>
                <div class="col-md-6 mb-3">
                    <label for="longitud">Longitud</label>
                    <input type="text" class="form-control" id="longitud" v-model="longitud">
                </div>
            </div>
            <div class="mb-3">
                <label for="descripcion">Descripcion:</label>
                <textarea class="form-control" id="descripcion" placeholder="Required example textarea" v-model="descripcion"></textarea>
                <div class="invalid-feedback">
                    Please enter a message in the textarea.
                </div>
            </div>
            
            <div class="form-group row">
                <label for="imagen">Image: </label>
                <input type="file" class="form-control-file" id="imagen" >
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                <button v-on:click.prevent="post" class="btn btn-primary">Sign in</button>
                </div>
            </div>
            
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "AgregarActividades",
    data(){
        return{
            errors: [],
            titulo:"",
            direccion:"",
            descripcion:"",
            latitud:"",
            longitud:"",
            imagen:"", //Path imagen,
            userId: this.$cookies.get("token")
        }
    },
    methods:{
        checkForm: function (e) {
            this.errors = [];

            if (!this.titulo) {
                this.errors.push("Titulo requerido");
            }else if (!this.direccion) {
                this.errors.push("Dirección requerida");
            }else if (!this.latitud || !this.longitud){
                this.errors.push("Cordenadas requeridas.");
            }else if (!this.descripcion){
                this.errors.push("Descripción requerida");
            }else if(this.imagen){
                this.errors.push("Imagen requerida.");
            }

            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();
        },
        post:function(){
            if(this.checkForm()){
                alert("Lugar registrado.");
                axios.post('http://localhost:3000/api/',{
                    titulo:this.titulo,
                    direccion:this.direccion,
                    descripcion:this.descripcion,
                    latitud:this.latitud,
                    longitud:this.longitud,
                    imagen:this.imagen,
                    userid:this.userId

                })
                .then((response) => {
                    console.log(response.data);

                    //Redirige al inicio.
                    this.$router.push("/");


                },(error) => {
                    console.log(error.response.data);
                });
            }
        }
    }

}
</script>

<style>

</style>