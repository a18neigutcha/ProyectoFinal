<template>

<div class="header-wrapper">
        <div class="container">
            <header role="banner">
                 <div class="row row-with-vspace site-branding">
					<div class="col-sm-2  site-title">
						<h1 class="site-title-heading">
                         <router-link class="navbar-brand mb-0 h1" to="/">
                        <img src="@/assets/logo.png" class="logoImg" alt="Logo de Barcelona desconocida">
                        {{nombreApp}}
                    </router-link>
                                
                        </h1>
						
					</div><!-- Close col sm2-->
					<div class="col-sm-10 page-header-top-right">
                    
                    <div class="site-description">
                    <div class="row">
							<div class="col-sm-8">
								<h1>This Is The Site Description</h1><br>
					</div> <!-- Close col sm8-->
                                <div class="col-sm-4">  
						<div class="pull-right">
							<div id="simple-social-icons-3" class="widget simple-social-icons"><ul class="alignleft"><li class="social-facebook"><a href="https://www.facebook.com/" target="_blank">&#xe606;</a></li><li class="social-instagram"><a href="https://www.instagram.com/" target="_blank">&#xe600;</a></li><li class="social-twitter"><a href="https://www.instagram.com/" target="_blank">&#xe607;</a></li><li class="social-youtube"><a href="https://www.youtube.com/" target="_blank">&#xe60f;</a></li></ul></div> 
						</div>
						<div class="clearfix"></div>
						 
							</div><!-- Close col sm4-->
						</div><!-- Close col row-->
                        
                        </div><!-- Close col site description-->
                        
                        
                   <div class="row main-navigation">
					<div class="col-md-12">
                   
						<nav class="navbar navbar-default" role="navigation">
							<div class="navbar-header">
								<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-primary-collapse">
									<span class="sr-only">Toggle navigation</span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
							</div>
							
							<div class="collapse navbar-collapse navbar-primary-collapse">
								<ul id="menu-main-menu" class="nav navbar-nav"><li id="menu-item-28" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28"><a href="#">Home</a></li>
                                <li id="menu-item-29" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-29 dropdown" data-dropdown="dropdown"><a href="#about-us/" class="dropdown-toggle" data-toggle="dropdown">About <span class="caret"></span> </a>
                                <ul class="sub-menu dropdown-menu">
                                    <li id="menu-item-62" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-62"><a href="#about-us/faqs/">FAQs</a></li>
                                    <li id="menu-item-30" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-30"><a href="#about-us/mission/">Mission</a></li>
                                    <li id="menu-item-31" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-31"><a href="#about-us/company/">Company</a></li>
                                </ul>
                                </li>
                                <li id="menu-item-35" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-15 current_page_item menu-item-35 active active"><a href="#locations/">Locations</a></li>
                                <li id="menu-item-37" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-37"><a href="#our-menu/">Menu</a></li>
                                <li id="menu-item-40" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-40"><a href="#category/events/">Events</a></li>

                                <li id="menu-item-36" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-36"><a href="#news/">News</a></li>

                                <li id="menu-item-32" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32"><a href="#contact-f27/">Contact</a></li>
                                </ul> 
                               
							</div><!--.navbar-collapse-->
						</nav>
					</div>
				</div><!--.main-navigation-->
						<div class="sr-only">
							<a href="#content" title="Skip to content">Skip to content</a>
						</div>
						
					</div>
				</div><!--row .site-branding-->
				
				
			</header>
        </div><!--.container-->
         <!-- Barra de subMenu -->
 <!--        <div class="row">
            <div class="col">
                <SubMenu :sesionInit="$cookies.get('token')"/>
            </div>
            
        </div> -->
    </div><!--.header-wrapper-->

    
   
</template>



<script>

/*     import SubMenu from "./SubMenu.vue";

    export default {
        name: 'BarraDeMenu',
        props: {
            nombreApp: String,
            sesionInit: String

        },
        components: {
            SubMenu,
        },
        methods: {
            logOut: function(){
                this.$cookies.remove("token");
                this.sesionInit = this.$cookies.get("token");
            }
        }
    } */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*     .logoImg{
        width: 3em;
        height: 3em;
    } */
    .header-wrapper{

    background: #f5f5f5; 
    width: 100%; }
    div.site-description div.row div.col-sm-4 div.pull-right div#simple-social-icons-3.widget.simple-social-icons{ margin-top: 5px;}

    @media (min-width: 768px) {
    .navbar-left {
        float: left !important;
    }
    .navbar-right {
        float: right !important;
        margin-right: -15px;
    }
    .navbar-right ~ .navbar-right {
        margin-right: 0;
    }
    .dropdown-menu > .active > a, .dropdown-menu > .active > a:focus, .dropdown-menu > .active > a:hover {
        background-color: #00AAD4;
        background-image: linear-gradient(to bottom, #00AAD4 0px, #00AAD4 100%);
        background-repeat: repeat-x;
    }
    }
    .navbar-default {
        background-color: transparent;
        border-color: transparent;
    }
    .navbar-default .navbar-brand {color: #00AAD4;
    }
    .navbar-default .navbar-brand:focus, .navbar-default .navbar-brand:hover {
        background-color: transparent;
        color: #5e5e5e;
    }
    .navbar-default .navbar-text {color: #00AAD4;
    }

    .navbar-default .navbar-nav > li > a:focus, .navbar-default .navbar-nav > li > a:hover {
        background-color: transparent;
        color: #333;
    }
    .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:focus, .navbar-default .navbar-nav > .active > a:hover {
        background-color: #00AAD4;
        color: #fff;
    }
    .navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:focus, .navbar-default .navbar-nav > .disabled > a:hover {
        background-color: transparent;
        color: #ccc;
    }
    .navbar-default .navbar-toggle {
        border-color: #00AAD4;
    }
    .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
        background-color: #ddd;
    }
    .navbar-default .navbar-toggle .icon-bar {
        background-color: #00AAD4;
    }
    .navbar-default .navbar-collapse, .navbar-default .navbar-form {
            border-color: transparent;
    }
    .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:focus, .navbar-default .navbar-nav > .open > a:hover {
        border-color: transparent;
        color: #555;
    }
    @media (max-width: 767px) {
    .navbar-default .navbar-nav .open .dropdown-menu > li > a {color: #00AAD4;
    }
    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus, .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover {
        background-color: transparent;
        color: #333;
    }
    .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover {
        background-color: #e7e7e7;
        color: #555;
    }
    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover {
        background-color: transparent;
        color: #ccc;
    }
    .navbar .navbar-nav .open .dropdown-menu > .active > a, .navbar .navbar-nav .open .dropdown-menu > .active > a:focus, .navbar .navbar-nav .open .dropdown-menu > .active > a:hover {
        background-image: linear-gradient(to bottom, #000 0px, #00AAD4 100%);
        background-repeat: repeat-x;
        color: #fff;
    }
    }
    .navbar-default .navbar-nav > li > a {color: #00AAD4;
    text-transform: uppercase; font-size: 12px;}
    .navbar-default {
        background-image: linear-gradient(to bottom, transparent 0px, transparent 100%);
        background-repeat: repeat-x;
        border-radius: 0px;
        box-shadow: 0 0px 0 rgba(255, 255, 255, 0.15) inset, 0 0px 0px rgba(0, 0, 0, 0.075);
    }
    .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .open > a {
    background-image: linear-gradient(to bottom, transparent 0px, transparent 100%);
        background-repeat: repeat-x;
        box-shadow: 0 0px 0px rgba(0, 0, 0, 0.075) inset;
    }
    .navbar-brand, .navbar-nav > li > a {
        text-shadow: 0 0px 0 rgba(255, 255, 255, 0.25);
    }
/*     @font-face {
        font-family: "ssi-icomoon";
        font-style: normal;
        font-weight: normal;
        src: url("@/font/ssi-icomoon.eot?#iefixssi-texv9a") format("embedded-opentype"), url("../font/ssi-icomoon.woff?ssi-texv9a") format("woff"), url("../font/ssi-icomoon.ttf?ssi-texv9a") format("truetype"), url("../font/ssi-icomoon.svg?ssi-texv9a#ssi-icomoon") format("svg");
    } */
    .simple-social-icons {
        overflow: hidden;
    }
    .simple-social-icons ul {
        margin: 0;
        padding: 0;
    }
    .simple-social-icons ul li {
        background: rgba(0, 0, 0, 0) none repeat scroll 0 0 !important;
        border: medium none !important;
        float: left;
        list-style-type: none !important;
        margin: 0 6px 12px !important;
        padding: 0 !important;
    }
    .simple-social-icons ul li a {
        -moz-osx-font-smoothing: grayscale;
        border: medium none !important;
        box-sizing: content-box;
        display: inline-block;
        font-family: "ssi-icomoon";
        font-style: normal !important;
        font-variant: normal !important;
        font-weight: normal !important;
        line-height: 1em;
        text-align: center;
        text-decoration: none !important;
        text-transform: none !important;
        width: 1em;
    }
    .simple-social-icons ul.aligncenter {
        text-align: center;
    }
    .simple-social-icons ul.aligncenter li {
        display: inline-block;
        float: none;
    }

</style>
