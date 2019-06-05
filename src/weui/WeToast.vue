<template>
   <div class="we-toast" :class="toastClasses" >
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
             showCloseButton:true

          }
       },
       props:{
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
          /*   validator(value){
                return['info','feedback'].indexOf(value)
             }*/
          },


          position:{
             type:String,
             default:'',
        /*     validator(value){
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
          //如需对属性值做修改需要用Watch,而不能用Computed
          showCloseButton() {
             if (this.toastType=='info') {
                this.showCloseButton = false;
             }
             return this.showCloseButton
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
                this.animate === ''? '': this.animate,
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

</style>
