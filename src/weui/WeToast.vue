<template>
   <div class="we-toast ">
      <div class="we-toast-bd">
         <span class="we-toast-icon confirm-ico-warn-s"></span>
         <h3 class="we-toast-tit">反馈提示文案</h3>
         <p class="we-toast-des">附属文案</p>
      </div>
      <div class="we-toast-ft">
         <div class="we-toast-opreate">
            <we-button btn-style="default" btn-size="s">知道了</we-button>
         </div>
      </div>
      <slot></slot>
      <a class="we-toast-close" @click="onClickClose" v-if="closeButton">×</a>
   </div>
</template>

<script>
import WeButton  from './WeButton'
/*import Vue from 'vue'
   Vue.prototype.$toast=function () {
      console.log('我是Toast')
   };*/
    export default {
       name:'WeToast',
       components: {WeButton},
       props:{
          autoClose:{
             type:Boolean,
             default:true
          },
          autoCloseDelay:{
             type:Number,
             default: 3
          },
          closeButton:{
             type:Object,
             default:()=>{
                return{
                   callback:undefined
                }

             }
          }
       },

       mounted() {
          if(this.autoClose){
             setTimeout(()=>{
                this.close()
             },this.autoCloseDelay*1000)
          }
       },
       methods:{
          close(){
             this.$el.remove();//将元素从页面中移除
             this.$destroy();
          },
          onClickClose(){
             this.close();
             if(this.closeButton && typeof this.closeButton.callback==='function' ){
                this.closeButton.callback()//判断用户是否有closeButton
             }

          }

       }


    }



</script>


<style lang="scss">

</style>
