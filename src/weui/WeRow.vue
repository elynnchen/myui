<template>
   <div class="we-row" :style="{marginLeft: -gutter/2+'px',marginRight:-gutter/2+'px'}">
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

        },
        created(){
            console.log('row created')
        },
        mounted(){
            console.log(this.$children);
            this.$children.forEach((vm)=>{//把grutter传到每个子组件
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
