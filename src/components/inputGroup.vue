<template>



    <div class="weui-demo">
        <h1 class="weui-demo-tit">按钮组件</h1>
        <div class="weui-demo-item">
            <h2 class="weui-demo-item-hd">默认按钮</h2>
            <div class="weui-demo-item-bd">
                <div class="box">
                   <we-input-group value="张三" errortips="内容不少于两个字" class="error">

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

        }
    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
