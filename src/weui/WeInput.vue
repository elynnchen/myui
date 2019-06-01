<template>
        <input
               :disabled="disabled"
               class="we-input-original"
               size="16"
               :type="type"
               :value="value"
               @input="$emit('input',$event.target.value)"
               :placeholder="placeholder">
</template>

<script>
    export default {
        name: 'WeInput',//名字是用来调试的
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
                message:{}
        }


    }

</script>


<style>
.svg-icon{ width:16px;height:16px; vertical-align: middle;}
</style>
