<template>

    <div class="weui-demo">
        <h1 class="weui-demo-tit">input组件</h1>
        <temp-box title="Input类型">
            <template>
                <p>value</p> <we-input value="张三" placeholder="请输入文字"  type="text" ></we-input><br/><br/>
                <p>placeholder</p> <we-input placeholder="请输入文字"  type="text" ></we-input><br/><br/>
                <p>禁用disabled</p><we-input value="张三" placeholder="请输入文字" disabled  type="text" ></we-input><br/><br/>
                <p>type="date"</p><we-input type="date" ></we-input>  <br/><br/>
                <p>type="tel"</p> <we-input placeholder="输入电话"  type="tel" ></we-input> <br/><br/>
                <p>type="search"</p> <we-input placeholder="输入搜索内容"  type="search" ></we-input><br/><br/>
                <p>type="range"</p> <we-input  type="range" ></we-input> <br/><br/>
                <p>type="color"</p> <we-input  type="color" ></we-input> <br/><br/>
                <p>model=""</p> <we-input  type="text" v-model="message" ></we-input> <br/><br/>
                <p>massage:{{message}}</p>
            </template>
            <div slot="codediv"><per-code>{{code1}}</per-code></div>
        </temp-box>

        <temp-box title="Input校验提示">
            <template>
                <we-input placeholder="输入不少于4个字" :error="err" v-model="str" @change="inputChange">
                </we-input><br/><br>
                <p>{{getStr}}</p>
                <button type="button" class="we-button" v-on:click='btnClick' >验证</button>

            </template>
            <div slot="codediv"><per-code>{{code}}</per-code></div>
        </temp-box>
    </div>




</template>

<script>
    import WeInput from '../weui/WeInput'
    import PerCode from './code'
    import TempBox from './TempBox'
    import WeInputCode from '!!raw-loader!./../components/input.vue';//将文件转化成字符串,注这里的是已经为文本文件，因此用插值表达示表示
    export default {
        name: '',
        components:{
            WeInput,PerCode,TempBox

        },
        data(){
            return{
                err:"",
                str: '',
                getStr:'null',
                code:WeInputCode,
                message:'',
                code1:`
<we-input value="张三" placeholder="请输入文字"  type="text" ></we-input>
<we-input placeholder="请输入文字"  type="text" ></we-input>
<we-input value="张三" placeholder="请输入文字" disabled  type="text" ></we-input>
<we-input type="date" ></we-input>  <br/><br/>
<we-input placeholder="输入电话"  type="tel" ></we-input>
<we-input placeholder="输入搜索内容"  type="search" ></we-input>
<we-input  type="range" ></we-input>
<we-input  type="color" ></we-input>
<we-input  type="text" v-model="message" ></we-input>
                `
            }
        },
        methods:{
            btnClick: function() {
                console.log(this.str);
                this.getStr = this.str.toUpperCase();
                console.log(this.getStr);
                if(this.str.length<4){
                    this.err="内容不少于四个字"
                }
                else {
                    this.err=""
                }
            },
            inputChange:function () {

                if(this.str.length<4){
                    this.err="内容不少于四个字"
                }
                else {
                    this.err=""
                }
            }

        },
    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .we-input{width:100%;}

</style>
