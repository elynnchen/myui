<template>
    <div class="weui-demo">
        <h1 class="weui-demo-tit">按钮组件</h1>
        <div class="weui-demo-item">
            <h2 class="weui-demo-item-hd">默认按钮</h2>
            <div class="weui-demo-item-bd">
                <div class="box">
                    <we-button btn-style="primary"  btn-size="m">按钮</we-button>
                    <we-button btn-style="primary" disabled="disabled"  btn-size="m">禁用按钮</we-button>
                    <we-button disabled="disabled"  btn-size="m">禁用按钮</we-button>
                    <we-button icon-name="icon-loding" icon-position="left">按钮</we-button>

                    <we-button icon-name="icon-loding" icon-position="right">按钮</we-button>
                    <we-button btn-style="primary"  btn-size="m" @click="handleclick">算数+1</we-button>
                <p>{{message}}</p>
                    <div id="test" style="height:100px;"></div>
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
    import WeButton from '../weui/WeButton'
    export default {
        name: '',
        components:{
            WeButton

        },
        data(){
           return{
               message:0}
        },
        methods:{
            handleclick(){
                this.message++

            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .box button{vertical-align: top; margin-right: 10px;}

</style>
