<template>
   <transition name="fade">
   <div class="we-toast" :class="toastClasses" v-if="show">
      <div class="we-toast-bd">
         <we-icon :name="iconName"></we-icon>
         <!--<we-icon  name="icon-success_fill"></we-icon>-->
         <!--<we-icon  name="icon-prompt_fill" ></we-icon>-->
            <h3 class="we-toast-tit" > <slot></slot></h3>
            <p class="we-toast-des" v-if="toastDetails">{{toastDetails}}</p>
      </div>
      <div class="we-toast-ft" v-if="buttonTxt">
         <div class="we-toast-opreate">
            <we-button btn-style="default" btn-size="s">{{buttonTxt}}</we-button>
         </div>
      </div>

      <a class="we-toast-close" @click="onClickClose" v-if="showCloseButton">×</a>
   </div>
   </transition>
</template>

<script>
   import  WeIcon from './WeSvgicon'
import WeButton  from './WeButton'

/*import Vue from 'vue'
   Vue.prototype.$toast=function () {
      console.log('我是Toast')
   };*/
    export default {
       name:'WeToast',
       components: {WeButton,WeIcon},
       data(){
          return{
             show:true,
             showCloseButton:true,
          }
       },
       props:{
          value:{
             type:Boolean,
             default:false
          },
          autoClose:{
             type:Boolean,
             default:false
          },

          autoCloseDelay:{
             type:Number,
             default: 2
          },
          closeButton:{
             type:Object,
             default:()=>{
                return{
                   callback:undefined
                }

             }
          },
          toastDetails:{type:String},
          buttonTxt:{type:String},
          toastType:{
             type:String,
             default:'info',
            /* validator(value){
                return['info','feedback'].indexOf(value)
             }*/
          },


          position:{
             type:String,
             default:'',
         /* validator(value){
                return['top','center'].indexOf(value)
             }*/

          },
          animate:{
             type:String,
             default:'we-fade-in'
          }
       },

       mounted() {
          if(this.autoClose){
             this.showCloseButton=false;
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

       },
       watch:{
          value(val){
             this.show=val;
          }
       },

       computed:{
          iconName() {
             let toastIconName = "";
             switch (this.toastType) {
                case "warn":{
                   toastIconName = "icon-prompt_fill";
                   break;
                }
                case "success":{
                   toastIconName = "icon-success_fill";
                   break;
                }
             }
             return toastIconName;
          },
          toastClasses(){
             return[
                this.position === ''? '':`position-${this.position}`,
              /*  this.animate === ''? '': this.animate,*/
                this.toastType,
                ]
          }
       }

    }

</script>


<style lang="scss">
   .we-toast {
      min-width: auto;
      .svg-icon {}
      &.position-top{
         position: fixed;
         top:0;
         left:50%;
         transform: translateX(-50%);
      }
      &.position-center{
         position: fixed;
         top:50%;
         left:50%;
         transform: translate(-50%);

      }
      &.info{

      }
      .svg-icon{position: absolute; left:0;top:0;}

      &.info  {
         .svg-icon{}
         .we-toast-tit, .we-toast-des{padding-left:0; text-align: center}

        }
      &.warn{
         .svg-icon{fill: red; display: block}

      }
      &.success{
         .svg-icon{fill: #00cb43; display: block}

      }

   }
   .fade-leave-active,.fade-enter-active{
      //opacity:1;
      transition:all 1s;
   }
   .fade-enter, .fade-leave-to{
      opacity: 0;

   }

</style>
