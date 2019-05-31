<template>
   <div class="we-row" :style="rowStyle" :class="classes">
      <slot></slot>
   </div>
</template>

<script>

    export default {
        name: 'WeRow',
        props:{
            gutter:{
                type:[Number,String]
            },
            align:String,
            validator(value) {
                return['left','right','center'].includes(value)
            }
        },
        computed:{
            rowStyle(){
                return{marginLeft: -this.gutter/2+'px',marginRight:-this.gutter/2+'px'}
            },
            classes(){
                let {align}=this;
                return[align && `align-${align}`]
            }

        },
        mounted(){
            this.$children.forEach((vm)=>{
                vm.gutter=this.gutter
            })
        }


    }



</script>


<style lang="scss">
    .we-row{
        display: flex;
        &.align-left{ justify-content: flex-start;
        }

        &.align-right{ justify-content: flex-end;
            }
        &.align-center{ justify-content: center;

        }

    }

</style>
