<template>
        <div class="we-input" :class="{error}" >
        <input
               :disabled="disabled"
               class="we-input-original"
               size="16"
               :type="type"
               :value="value"
               @input="$emit('input',$event.target.value)"
               @change="$emit('change',$event)"
               :placeholder="placeholder">
             <span class="we-input-tips" v-if="error">
                     <we-icon class="icon-error"  name="icon-prompt_fill"></we-icon> {{error}}
             </span>
        </div>

</template>

<script>
    import  WeIcon from './WeSvgicon'
    export default {
        name: 'WeInput',//名字是用来调试的
        components:{WeIcon},
        props:{
                value:{
                   type:String
                },
                placeholder:{
                    type: String
                },
                disabled:{
                        type:Boolean,
                        default:false

                },
                type:{},
                error:{
                        type:String
                }
        }


    }

</script>


<style>

.svg-icon{ width:16px;height:16px; vertical-align: middle;}
.we-input.error .we-input-tips{color:red}
.we-input.error .icon-error{fill:red}
</style>
