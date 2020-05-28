<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<template>
  <div class="row">
    <div class="col-sm">
      <carousel :data="data"></carousel>
    </div>
    <div class="col-sm mt-3 mt-sm-0">
      <carousel :data="data" direction="right"></carousel>
    </div>
    <div class="col-sm mt-3 mt-sm-0">
      <carousel :data="data" direction="up"></carousel>
    </div>
    <div class="col-sm mt-3 mt-sm-0">
      <carousel :data="data" direction="down"></carousel>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueCarousel from '@chenfengyuan/vue-carousel';
Vue.use(VueCarousel);
  export default {
    data() {
      return {
        data: [
          {
            content: this.content,
          },
          {
            content: this.content,
          },
          {
            content: this.content,
          },
        ],
      };
    },

    methods: {
      content(createElement, data, vm) {
        return createElement('div', {
          class: 'example-slide',
        }, [`Slide ${vm.$parent.direction}`]);
      },
    },
  };
</script>


<style scoped>

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
