<template>
  <div id="SignUp">
        <BContainer>
            <BLayout row>
                <BFlex xs12 sm6 m4 offset-xs0 offset-sm3 offset-m4>
                    <v-form>
                        <v-text-field label="Nombre de Usuario"></v-text-field>
                        <v-text-field label="Email"></v-text-field>
                        <v-text-field label="Contraseña" type="password"></v-text-field>
                        <v-text-field label="Confirmar Contraseña" type="password"></v-text-field>
                        <v-btn block color="primary" @click="$router.push('/principal')">Registrarse</v-btn>
                    </v-form>
                </BFlex>
            </BLayout>
        </BContainer>
  </div>
</template>
<script>
    export default {
        name: "SignUp",
        created () {
            this.$store.commit('SET_LAYOUT', 'login-layout')
        }
    }
</script>