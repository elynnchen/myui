<template>
    <div class="weui-demo">
        <h1 class="weui-demo-tit">按钮组件</h1>
        <temp-box title="按钮类形">
            <template>
                <div class="demo-p">
                    <h3>按钮基础样式</h3>
                    <we-button btn-style="primary" >主要按钮</we-button>
                    <we-button btn-style="primary" disabled="disabled" >禁用主要按钮</we-button>
                    <we-button btn-style="default">默认按钮</we-button>
                    <we-button disabled="disabled" >禁用默认按钮</we-button>
                </div>

                <div class="demo-p">
                    <h3>按钮大小</h3>
                    <we-button btn-style="default" btn-size="s">小号按钮</we-button>
                    <we-button btn-style="default" btn-size="m">中号按钮</we-button>
                    <we-button btn-style="default" btn-size="l">大号按钮</we-button>

                </div>

                <div class="demo-p">
                    <h3>按钮加Icon</h3>
                    <we-button icon-name="icon-loding" icon-position="left">icon在左边</we-button>
                    <we-button icon-name="icon-loding" icon-position="right">icon在右边</we-button>
                </div>
                <div class="demo-p">
                    <h3>按钮事件</h3>
                    <we-button btn-style="primary" btn-size="m" @click="handleclick">算数+1</we-button>
                    <p>{{message}}</p>
                </div>

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
<we-button btn-style="primary" >主要按钮</we-button>
<we-button btn-style="primary" disabled="disabled" >禁用主要按钮</we-button>
<we-button btn-style="default">默认按钮</we-button>
<we-button disabled="disabled" >禁用默认按钮</we-button>

<we-button btn-style="default" btn-size="s">小号按钮</we-button>
<we-button btn-style="default" btn-size="m">中号按钮</we-button>
<we-button btn-style="default" btn-size="l">大号按钮</we-button>

<we-button icon-name="icon-loding" icon-position="left">icon在左边</we-button>
<we-button icon-name="icon-loding" icon-position="right">icon在右边</we-button>

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

.demo-p{ margin-bottom: 20px;}
.demo-p h3{padding:10px 0;}
</style>
