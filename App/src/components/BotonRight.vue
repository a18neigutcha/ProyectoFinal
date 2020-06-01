<template>
    <div class="contenedor">
        <button @click="clickButon" class="bot">
            <span class="bot-text">
                Empezar
                <i class="fas fa-arrow-right"></i>
            </span>
        </button>
    </div>
    
</template>
<script>
export default {
    name:'BotonRight',
    methods: {
        clickButon: function(){
            if(this.$cookies.get("token")){
                this.$router.push("/Actividades");
            }else{
                this.$router.push("/SignIn");
            }
            
        }
    }
}
</script>

<style scoped>
    .link{
        text-decoration: none;
    }
    .contenedor {
        width: auto;
        display: -webkit-box;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
                flex-direction: column;
    }

    .bot {
        text-transform: uppercase;
        letter-spacing: 1.1rem;
        margin: 20px auto;
        border: none;
        position: relative;
        font-family: 'Playfair Display', serif;
        padding: 1.4rem 4.2rem;
        padding-right: 3.1rem;
        font-size: 1.4rem;
        background-color: rgba(255, 255, 255, 0);
    }
    .bot::before {
        -webkit-transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        content: "";
        width: 50%;
        height: 100%;
        background: #25f9c76c;
        position: absolute;
        top: 0;
        left: 0;
    }
    .bot .bot-text {
        color: white;
        /* mix-blend-mode: difference; */
        font-weight: 900;
    }
    .bot:hover::before {
        background: #25f9c76c;
        width: 100%;
    }
</style>