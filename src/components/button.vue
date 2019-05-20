<template>
    <div class="weui-demo">
        <h1 class="weui-demo-tit">按钮组件</h1>
        <div class="weui-demo-item">
            <h2 class="weui-demo-item-hd">默认按钮</h2>
            <div class="weui-demo-item-bd">
                <div class="box">
                    <we-button btn-style="primary"  btn-size="m">按钮</we-button>
                    <we-button icon-name="icon-loding" icon-position="left" >按钮</we-button>
                    <we-button icon-name="icon-loding" icon-position="right" >按钮</we-button>
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

        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
