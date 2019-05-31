<template>
   <div class="we-row" :style="rowStyle">
      <slot></slot>
   </div>
</template>

<script>

    export default {
        name: 'WeRow',
        props:{
            gutter:{
                type:[Number,String]
            }
        },
        computed:{
            rowStyle(){
                return{marginLeft: -this.gutter/2+'px',marginRight:-this.gutter/2+'px'}
            }

        },
        created(){

        },
        mounted(){
            console.log(this.$children);
            this.$children.forEach((vm)=>{
                vm.gutter=this.gutter
            })
        }


    }
    var div=document.createElement('div');//created
    var childDiv=document.createElement('div');//child created
    div.appendChild(childDiv);//child mounted
    document.body.appendChild(div);//mounted


</script>


<style>
    .we-row{ display: flex}

</style>
