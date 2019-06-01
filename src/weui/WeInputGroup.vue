<template>
        <div class="we-form-elm" :class="{error}">
                <!-- 如果你给我一个error,我就有个error类 :class="{'error':error}"-->
                <!-- we-input S -->
                <div class="we-input" >
                        <input :disabled="disabled"
                               class="we-input-original"
                               size="16"
                               type="text"
                               :placeholder="placeholder"
                               :value="value"
                               @input="$emit('input',$event.target.value)"
                               @change="$emit('change',$event)"
                        >
                </div>
                <!-- we-input E -->
                <p class="we-form-elm-tips" v-if="error"> <we-icon class="icon-error"  name="icon-prompt_fill"></we-icon> {{error}}</p>

        </div>



</template>

<script>
    import  WeIcon from './WeSvgicon'
    export default {
        name: 'WeInputGroup',//名字是用来调试的
            components:{WeIcon},
        props:{
                value:{
                   type:[String,Number]
                },
                placeholder:{
                    type: String
                },
                disabled:{
                        type:Boolean,
                        default:false

                },
                error:{
                        type:String
                }
        },
         methods:{

            }



    }

</script>


<style>
.svg-icon{ width:16px;height:16px; vertical-align: middle;}
.we-form-elm.error .we-input-original{border:1px solid red}
.we-form-elm.error .we-form-elm-tips{color:red}
.we-form-elm.error .icon-error{fill:red}
</style>
