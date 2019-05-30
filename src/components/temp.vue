<template>

    <div class="weui-demo">
        <h1 class="weui-demo-tit">Input校验</h1>
        <temp-box title="">
            <template>

            </template>
            <div slot="codediv"><per-code>{{code}}</per-code></div>
        </temp-box>

    </div>

</template>

<script>
    import PerCode from './code'
    import TempBox from './TempBox'
    import WeInputGroup from '../weui/WeInputGroup'
    export default {
        name: '',
        components:{
            WeInputGroup,PerCode,TempBox
        },
        data(){
            return{
                code: `


               `

            }
        },
        methods:{

        }
    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
