<template>
    <button class="we-button" :class="`icon-${iconPosition}`">
        <svg v-if="iconName" class="svg-icon" aria-hidden="true">
            <use v-bind:xlink:href="`#${iconName}`"></use>
        </svg>
        <span class="we-button-cont"><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name: 'WeButton',
        //props:['iconName','iconPosition'] --这是数据写法，还可以用对像写法
        props:{
            iconName:{},
            iconPosition:{
                type: String,
                default:'left',
                validator(value) {
                    if(value!=='left'&& value!=='right'){
                        return false
                    } else {
                        return true
                    }
                }

            }


        }


    }

</script>


<style>
.svg-icon{ width:16px;height:16px; vertical-align: middle;}
.we-button{
    display: inline-flex; justify-content: center; align-items: center;}
.we-button.icon-left .we-button-cont{order: 2;}
.we-button.icon-left .svg-icon{order: 1; margin-right:5px;}
.we-button.icon-right .we-button-cont {order: 1;}
.we-button.icon-right .svg-icon {order: 2; margin-left:5px;}

</style>
