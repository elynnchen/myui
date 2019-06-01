<template>

    <div class="weui-demo">
        <h1 class="weui-demo-tit">Toast</h1>
        <temp-box title="">
            <template>
                <we-toast></we-toast>
                <we-button btn-style="default" btn-size="s" @click="showToast">知道了</we-button>

            </template>
            <div slot="codediv"><per-code>{{code}}</per-code></div>
        </temp-box>

    </div>

</template>

<script>
    import WeButton  from '../weui/WeButton'
    import PerCode from './code'
    import TempBox from './TempBox'
    import WeToast from '../weui/WeToast'
    export default {
        name: '',
        components:{
            WeToast,PerCode,TempBox,WeButton
        },
        data(){
            return{
                code: `


               `
            }
        },
        methods:{
            showToast(){
                this.$toast('fdsafda')

            }

        },
        created(){


        }

    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
