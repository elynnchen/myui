<template>
    <button class="we-button" :class='classes' @click="$emit('click')">
        <we-icon v-if="iconName" :name="iconName"></we-icon>
        <span class="we-button-cont"><slot></slot></span>
    </button>
</template>

<script>
    import  WeIcon from './WeSvgicon'
    export default {
        name: 'WeButton',
        components:{WeIcon},
        //props:['iconName','iconPosition'] --这是数据写法，还可以用对像写法
        props:{
            iconName:{},
            btnStyle:{
                type: String,
                default: ''
            },
            btnSize:{
                type: String,
                default: ''
            },
            iconPosition:{
                type: String,
                default:'',
                validator(value) {
                    if(value!=='left'&& value!=='right'){
                        return false
                    } else {
                        return true
                    }
                }
            }
        },
        computed:{
            classes(){
                return [
                    this.btnStyle === ''? '':`we-button--${this.btnStyle}`,
                    this.iconPosition ==='' ? '':`icon-${this.iconPosition}`,
                    this.btnSize ==='' ? '':`we-button--size-${this.btnSize}`,
                ]

            }
        },
        methods:{

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
