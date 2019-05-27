<template>
        <input :value="value" :disabled="disabled" class="we-input" size="16" type="text" :placeholder="placeholder">
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

                }
        }


    }

</script>


<style>
.svg-icon{ width:16px;height:16px; vertical-align: middle;}
</style>
