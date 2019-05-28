<template>



    <div class="weui-demo">
        <h1 class="weui-demo-tit">Input校验</h1>
        <div class="weui-demo-item">
            <h2 class="weui-demo-item-hd">有错误提示则显示错误样式</h2>
            <div class="weui-demo-item-bd">
                <div class="box">
                   <we-input-group value="张三" error="内容不少于两个字"
                   @change="inputChange">
                   </we-input-group><br/><br>
                    <we-input-group value="张三" error=""
                                    @change="inputChange">
                    </we-input-group>
                </div>

            </div>
        </div>

        <div class="weui-demo-item">
            <h2 class="weui-demo-item-hd">圆形头像</h2>
            <div class="weui-demo-item-bd">

            </div>
        </div>


    </div>




</template>

<script>
    import WeInputGroup from '../weui/WeInputGroup'
    export default {
        name: '',
        components:{
            WeInputGroup
        },
        data(){
            return{

            }
        },
        methods:{
            inputChange(e){
                console.log(e.target.value)
            }

        }
    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
