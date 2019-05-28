<template>



    <div class="weui-demo">
        <h1 class="weui-demo-tit">input组件</h1>
        <div class="weui-demo-item">
            <h2 class="weui-demo-item-hd">input类型</h2>
            <div class="weui-demo-item-bd">
                <div class="box">
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

                </div>

            </div>
        </div>

        <div class="weui-demo-item">
            <h2 class="weui-demo-item-hd">其它H5标签</h2>
            <div class="weui-demo-item-bd">
                <progress max="100" value="60" class="css3">
                    <!-- Browsers that support HTML5 progress element will ignore the html inside `progress` element. Whereas older browsers will ignore the `progress` element and instead render the html inside it. -->
                    <div class="progress-bar">
                        <span style="width: 60%">60%</span>
                    </div>
                </progress>
                <br/><br/>

                <meter class="bpmeter" id="el0" name="systolic" min="0" low="90" optimum="120" high="140" max="200" value="145" title="mmHg"></meter>


            </div>
        </div>


    </div>




</template>

<script>
    import WeInput from '../weui/WeInput'
    export default {
        name: '',
        components:{
            WeInput

        },
        data(){
            return{
                message:'hi'

            }
        },
        methods:{

        }
    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
