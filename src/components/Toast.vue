<template>

    <div class="weui-demo">
        <h1 class="weui-demo-tit">Toast</h1>
        <temp-box title="Toast类型">
            <template>
                <we-toast toastType="info" >我是提示信息</we-toast>
                <we-toast toastType="warn" toastDetails="我是辅助信息">我是警告提示信息</we-toast>
                <we-toast toast-type="success">我是成功提示信息</we-toast>

            </template>
            <div slot="codediv"><per-code>{{code1}}</per-code></div>
        </temp-box>
        <temp-box title="">
            <we-button btn-style="default" btn-size="s" @click="showToastAutoClose">自动关闭</we-button>
            <we-button btn-style="default" btn-size="s" @click="showToastOnTop">在上面弹出Toast</we-button>
            <we-button btn-style="default" btn-size="s" @click="showToastOnCenter">在中间弹出</we-button>
            <div slot="codediv"><per-code>{{code}}</per-code></div>
        </temp-box>

    </div>

</template>

<script>
    import WeButton  from '../weui/WeButton'
    import PerCode from './code'
    import TempBox from './TempBox'
    import WeToast from '../weui/WeToast'
    import WeToastCode from '!!raw-loader!./../components/Toast.vue';
    export default {
        name: '',
        components:{
            WeToast,
            PerCode,TempBox,WeButton
        },
        data(){
            return{
                code:WeToastCode,
                code1: `
 <we-toast toastType="info" >我是提示信息</we-toast>
<we-toast toastType="warn" toastDetails="我是辅助信息">我是警告提示信息</we-toast>
<we-toast toast-type="success">我是成功提示信息</we-toast>

               `
            }
        },
        mounted(){


        },
        methods:{
            showToastAutoClose(){
                this.$toast(
                    '我是信息',//message值为空
                    {
                        autoClose:true,
                        autoCloseDelay:3,
                        closeButton:{
                            callback(){
                                console.log('用户说知道了')
                            }
                        },
                        position:'center'


                    })

            },
            showToastOnTop(){
                this.$toast(
                    '我是信息',//message值为空
                    {
                    autoClose:true,
                    autoCloseDelay:3,
                    closeButton:{
                        callback(){
                            console.log('用户说知道了')
                        }
                    },
                        position:'top',

                        toastType:"success",
                        toastDetails:"我是辅助信息"

                })

            },
            showToastOnCenter(){
                this.$toast(
                    '我是警告信息',//message值为空
                    {
                        autoClose:false,
                        autoCloseDelay:0,
                        closeButton:{
                            callback(){
                                console.log('用户说知道了')
                            }
                        },
                        position:'center',
                        toastType:"warn"


                    })

            },

        },
        created(){



        }

    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
