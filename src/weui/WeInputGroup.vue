<template>
        <div class="we-form-elm" :class="{error}">
                <!-- we-input S -->
                <div class="we-input" >
                        <input :value="value" :disabled="disabled"
                               class="we-input-original"
                               size="16"
                               type="text"
                               :placeholder="placeholder">
                </div>
                <!-- we-input E -->
                <p class="we-form-elm-tips" v-if="errortips">{{errortips}}</p>
        </div>



</template>

<script>
    export default {
        name: 'WeInputGroup',//名字是用来调试的
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
                errortips:{
                        type:String
                }
        }


    }

</script>


<style>
.svg-icon{ width:16px;height:16px; vertical-align: middle;}
 .we-form-elm.error .we-input-original{border:1px solid red}
.we-form-elm.error .we-form-elm-tips{color:red}
</style>
