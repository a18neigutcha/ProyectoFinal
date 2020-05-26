<template>
   
<div class="carousel slide " data-ride="carousel">
    <carousel :datos="datos" :controls="false"></carousel>
    <div class="row">
        <div class="carousel-inner">
            <div class="card-deck">
                <CartaLugar
                    v-for="(lugar,id) in datos" :key="id"
                    :titulo="lugar.titulo"
                    :subtitulo="lugar.direccion"
                    :descripcion="lugar.descripcion"
                    :imagen="lugar.imagen"
                ></CartaLugar>   
            </div>
        </div>                  
        <!--   
            <a class="left carousel-control" href="#carouselABC" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a>
            <a class="right carousel-control" href="#carouselABC" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a> 
        -->
    </div>  
</div>
<!-- container-fluid margin-0 -->
</template>

<script>
import CartaLugar from './CartaLugar';
import axios from 'axios';

export default {
  name: 'CarruselLugares',
  components:{
      CartaLugar
  },
  data:function() {
      return {
          datos:{
              titulo:"",
              subtitulo:"",
              descripcion:"",
              url:""

          }
      }
      
  },
  mounted () {
    axios.get('http://localhost:3000/api/')
    .then(response =>{
        this.datos=response.data;
        console.log(response.data);
    })
/*   },
  function(){
  // setup your carousels as you normally would using JS
  // or via data attributes according to the documentation
  // https://getbootstrap.com/javascript/#carousel
  $('#carousel123').carousel({ interval: 2000 });
  $('#carouselABC').carousel({ interval: 3600 });
    },

function(){
  $('.carousel-showmanymoveone .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<4;i++) {
      itemToClone = itemToClone.next();

      // wrap around if   at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  }); */
}
}
</script>

<style scoped>
  .card-deck {
    align-items: center;
    background-color: rgb(17, 17, 17);
    color: rgb(10, 10, 10);
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
    min-width: 10rem;
    margin: 0;
  }
/* .carousel-showmanymoveone{
  .carousel-control
  { 
    width: 4%;
    background-image:none;

    &.left 
    {
      margin-left:15px;
    }

    &.right 
    {
      margin-right:15px;
    }
  }

  .cloneditem-1, 
  .cloneditem-2, 
  .cloneditem-3
  {
    display: none;
  }

  .carousel-inner
  {
    @media all and (min-width: 768px)
    {
      @media (transform-3d), (-webkit-transform-3d)
      {
        > .item.active.right,
        > .item.next
        { 
          transform: translate3d(50%, 0, 0);  
          left: 0;
        }

        > .item.active.left,
        > .item.prev
        { 
          transform: translate3d(-50%, 0, 0);
          left: 0;
        }

        > .item.left,
        > .item.prev.right,
        > .item.active
        {
          transform: translate3d(0, 0, 0);
          left: 0;
        }    
      } 

      > .active.left,
      > .prev
      {
        left: -50%;
      }

      > .active.right,
      > .next
      {
        left:  50%;
      }

      > .left,
      > .prev.right,
      > .active
      {
        left: 0;
      }

      .cloneditem-1 
      {
        display: block;
      }
    }

    @media all and (min-width: 992px)
    {    
      @media (transform-3d), (-webkit-transform-3d)
      {
        > .item.active.right,
        > .item.next
        { 
          transform: translate3d(25%, 0, 0);  
          left: 0;
        }    

        > .item.active.left,
        > .item.prev
        { 
          transform: translate3d(-25%, 0, 0);
          left: 0;
        }

        > .item.left,
        > .item.prev.right,
        > .item.active
        {
          transform: translate3d(0, 0, 0);
          left: 0;
        }
      }

      > .active.left,
      > .prev
      {
        left: -25%;
      }

      > .active.right,
      > .next
      {
        left:  25%;
      }

      > .left,
      > .prev.right,
      > .active
      {
        left: 0;
      }

      .cloneditem-2, 
      .cloneditem-3
      {
        display: block;
      }
    }    
  }
} */

</style>
