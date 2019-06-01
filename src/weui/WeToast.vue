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
      <a class="we-toast-close" href="javascript:void(0);">×</a>
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
    }



</script>


<style lang="scss">

</style>
