<template>

    <div class="weui-demo">
        <h1 class="weui-demo-tit">Input校验</h1>
        <temp-box title="表单验证">
            <template>
                <we-input-group placeholder="输入不少于4个字" :error="err" v-model="str" @change="inputChange">
                </we-input-group><br/><br>
               <p>{{getStr}}</p>
                <button type="button" class="we-button" v-on:click='btnClick' >验证</button>
            </template>
            <div slot="codediv">  <pre v-highlightjs="code"><code class="html"></code></pre></div>
        </temp-box>
    </div>

</template>

<script>

    import TempBox from './TempBox'
    import WeInputGroup from '../weui/WeInputGroup'
    import WeInputGroupCode from '!!raw-loader!./../components/inputGroup.vue';//将文件转化成字符串,注这里的是已经为文本文件，因此用插值表达示表示
    export default {
        name: '',
        components:{
            WeInputGroup,TempBox
        },
        data(){
            return{
                err:"",
                str: '',
                code:WeInputGroupCode,
                getStr:'null'
            }
        },
        computed:{

        },

        methods:{
            btnClick: function() {
                console.log(this.str);
                this.getStr = this.str.toUpperCase();
                console.log(this.getStr);
                if(this.str.length<=4){
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
        mounted(){


        }
    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
