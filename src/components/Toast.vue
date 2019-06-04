<template>

    <div class="weui-demo">
        <h1 class="weui-demo-tit">Toast</h1>
        <temp-box title="">
            <template>
                <we-button btn-style="default" btn-size="s" @click="showToast">弹出Toast</we-button>

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
            PerCode,TempBox,WeButton
        },
        data(){
            return{
                code: `


               `
            }
        },
        methods:{
            showToast(){
                this.$toast(
                    '我是message我是message',
                    {
                    autoClose:false,
                    autoCloseDelay:0,
                    closeButton:{
                        callback(){
                            console.log('用户说知道了')
                        }
                    }


                })

            }

        },
        created(){
            console.log(this.autoClose)


        }

    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
