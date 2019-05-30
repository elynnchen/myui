<template>
    <div class="weui-demo">
        <h1 class="weui-demo-tit">按钮组件</h1>
        <temp-box title="表单验证">
            <template>
                <we-button btn-style="primary" btn-size="m">按钮</we-button>
                <we-button btn-style="primary" disabled="disabled" btn-size="m">禁用按钮</we-button>
                <we-button disabled="disabled" btn-size="m">禁用按钮</we-button>
                <we-button icon-name="icon-loding" icon-position="left">按钮</we-button>
                <we-button icon-name="icon-loding" icon-position="right">按钮</we-button>
                <we-button btn-style="primary" btn-size="m" @click="handleclick">算数+1</we-button>
                <p>{{message}}</p>
                <div id="test" style="height:100px;"></div>
            </template>
            <div slot="codediv"><per-code>{{code}}</per-code></div>
        </temp-box>
    </div>
</template>

<script>
    import WeButton from '../weui/WeButton'
    import PerCode from './code'
    import TempBox from './TempBox'
    import WeButtonCode from '!!raw-loader!./../weui/WeButton.vue';//将文件转化成字符串,注这里的是已经为文本文件，因此用插值表达示表示
    export default {
        name: '',
        components: {
            WeButton,PerCode,TempBox
        },
        data() {
            return {
                test: WeButtonCode,
                message: 0,
                code: `
<we-button btn-style="primary"  btn-size="m">按钮</we-button>
<we-button btn-style="primary" disabled="disabled"  btn-size="m">禁用按钮</we-button>
<we-button disabled="disabled"  btn-size="m">禁用按钮</we-button>
<we-button icon-name="icon-loding" icon-position="left">按钮</we-button>
<we-button icon-name="icon-loding" icon-position="right">按钮</we-button>
<we-button btn-style="primary"  btn-size="m" @click="handleclick">算数+1</we-button>
               `,
            }
        },
        methods: {
            handleclick() {
                this.message++

            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
