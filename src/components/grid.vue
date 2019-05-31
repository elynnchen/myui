<template>
    <div class="weui-demo">
        <h1 class="weui-demo-tit">栅格</h1>
        <temp-box title="栅格无缝隙" >
            <template>
                <we-row >
                    <we-col span="12"><div class="col-cont"></div></we-col>
                    <we-col span="12"><div class="col-cont"></div></we-col>
                </we-row>

                <we-row >
                    <we-col span="8"><div class="col-cont"></div></we-col>
                    <we-col span="8"><div class="col-cont"></div></we-col>
                    <we-col span="8"><div class="col-cont"></div></we-col>
                </we-row>

                <we-row >
                    <we-col ><div class="col-cont"></div></we-col>
                    <we-col ><div class="col-cont"></div></we-col>
                    <we-col ><div class="col-cont"></div></we-col>
                    <we-col ><div class="col-cont"></div></we-col>
                </we-row>
                <we-row >
                    <we-col span="2"><div class="col-cont"></div></we-col>
                    <we-col span="22"><div class="col-cont"></div></we-col>
                </we-row>
            </template>
            <div slot="codediv"><per-code>{{code1}}</per-code></div>
        </temp-box>

        <temp-box title="有空隙">
            <template>
                <we-row  gutter="12">
                    <we-col span="12"><div class="col-cont"></div></we-col>
                    <we-col span="12"><div class="col-cont"></div></we-col>
                </we-row>

                <we-row gutter="12">
                    <we-col span="8"><div class="col-cont"></div></we-col>
                    <we-col span="8"><div class="col-cont"></div></we-col>
                    <we-col span="8"><div class="col-cont"></div></we-col>
                </we-row>

                <we-row gutter="12">
                    <we-col span="6"><div class="col-cont"></div></we-col>
                    <we-col span="6"><div class="col-cont"></div></we-col>
                    <we-col span="6"><div class="col-cont"></div></we-col>
                    <we-col span="6"><div class="col-cont"></div></we-col>
                </we-row>
                <we-row gutter="12">
                    <we-col span="2"><div class="col-cont"></div></we-col>
                    <we-col span="22"><div class="col-cont"></div></we-col>
                </we-row>
            </template>
            <div slot="codediv"><per-code>{{code2}}</per-code></div>
        </temp-box>

        <temp-box title="偏移">
            <template>
                <we-row >
                    <we-col span="10"><div class="col-cont"></div></we-col>
                    <we-col span="8" offset="6"><div class="col-cont"></div></we-col>
                </we-row>

                <we-row >
                    <we-col span="6"><div class="col-cont"></div></we-col>
                    <we-col span="6"><div class="col-cont"></div></we-col>
                    <we-col span="6"><div class="col-cont"></div></we-col>
                    <we-col span="6"><div class="col-cont"></div></we-col>
                </we-row>
                <we-row >
                    <we-col span="2"><div class="col-cont"></div></we-col>
                    <we-col span="22"><div class="col-cont"></div></we-col>
                </we-row>
            </template>
            <div slot="codediv"><per-code>{{code3}}</per-code></div>
        </temp-box>
        <temp-box title="对齐(靠左，靠右，居中)">
            <template>
                <we-row align="left" >
                    <we-col span="4"><div class="col-cont">col-4</div></we-col>
                    <we-col span="4" ><div class="col-cont">col-4</div></we-col>
                    <we-col span="4"><div class="col-cont">col-4</div></we-col>
                </we-row>

                <we-row align="right" >
                    <we-col span="4"><div class="col-cont">col-4</div></we-col>
                    <we-col span="4"><div class="col-cont">col-4</div></we-col>
                    <we-col span="4"><div class="col-cont">col-4</div></we-col>
                </we-row>
                <we-row align="center" >
                    <we-col span="4"><div class="col-cont">col-4</div></we-col>
                    <we-col span="4"><div class="col-cont">col-4</div></we-col>
                    <we-col span="4"><div class="col-cont">col-4</div></we-col>
                </we-row>
            </template>
            <div slot="codediv"><per-code>{{code4}}</per-code></div>
        </temp-box>
    </div>
</template>

<script>
    import WeRow from '../weui/WeRow'
    import WeCol from '../weui/WeCol'
    import PerCode from './code'
    import TempBox from './TempBox'

    export default {
        name: '',
        components: {
            WeRow,PerCode,TempBox,WeCol
        },
        data() {
            return {
                code1:`
              <we-row >
                    <we-col span="12"><div class="col-cont"></div></we-col>
                    <we-col span="12"><div class="col-cont"></div></we-col>
                </we-row>

                <we-row >
                    <we-col span="8"><div class="col-cont"></div></we-col>
                    <we-col span="8"><div class="col-cont"></div></we-col>
                    <we-col span="8"><div class="col-cont"></div></we-col>
                </we-row>

                <we-row >
                    <we-col ><div class="col-cont"></div></we-col>
                    <we-col ><div class="col-cont"></div></we-col>
                    <we-col ><div class="col-cont"></div></we-col>
                    <we-col ><div class="col-cont"></div></we-col>
                </we-row>
                <we-row >
                    <we-col span="2"><div class="col-cont"></div></we-col>
                    <we-col span="22"><div class="col-cont"></div></we-col>
                </we-row>
                    `
                ,

                code2: `
                 <we-row  gutter="12">
                    <we-col span="12"><div class="col-cont"></div></we-col>
                    <we-col span="12"><div class="col-cont"></div></we-col>
                </we-row>

                <we-row gutter="12">
                    <we-col span="8"><div class="col-cont"></div></we-col>
                    <we-col span="8"><div class="col-cont"></div></we-col>
                    <we-col span="8"><div class="col-cont"></div></we-col>
                </we-row>

                <we-row gutter="12">
                    <we-col span="6"><div class="col-cont"></div></we-col>
                    <we-col span="6"><div class="col-cont"></div></we-col>
                    <we-col span="6"><div class="col-cont"></div></we-col>
                    <we-col span="6"><div class="col-cont"></div></we-col>
                </we-row>
                <we-row gutter="12">
                    <we-col span="2"><div class="col-cont"></div></we-col>
                    <we-col span="22"><div class="col-cont"></div></we-col>
                </we-row>`,
                code3: `
                 <we-row >
                    <we-col span="10"><div class="col-cont"></div></we-col>
                    <we-col span="8" offset="6"><div class="col-cont"></div></we-col>
                </we-row>

                <we-row >
                    <we-col span="6"><div class="col-cont"></div></we-col>
                    <we-col span="6"><div class="col-cont"></div></we-col>
                    <we-col span="6"><div class="col-cont"></div></we-col>
                    <we-col span="6"><div class="col-cont"></div></we-col>
                </we-row>
                <we-row >
                    <we-col span="2"><div class="col-cont"></div></we-col>
                    <we-col span="22"><div class="col-cont"></div></we-col>
                </we-row>
                        `,

                code4:`
                <we-row align="left" >
                    <we-col span="4"><div class="col-cont">col-4</div></we-col>
                    <we-col span="4" ><div class="col-cont">col-4</div></we-col>
                </we-row>

                <we-row align="right" >
                    <we-col span="4"><div class="col-cont">col-4</div></we-col>
                    <we-col span="4"><div class="col-cont">col-4</div></we-col>
                    <we-col span="4"><div class="col-cont">col-4</div></we-col>
                    <we-col span="4"><div class="col-cont">col-4</div></we-col>
                </we-row>
                <we-row align="center" >
                    <we-col span="4"><div class="col-cont">col-4</div></we-col>
                    <we-col span="4"><div class="col-cont">col-4</div></we-col>
                </we-row>`
            }

        },
        created(){

        },

        methods: {

        }
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .we-col{margin-bottom: 10px;}
    .col-cont{height:30px; width:100%;display: block; }
    .we-col:nth-child(4n+1) .col-cont{ background:#a2ccf8;}
    .we-col:nth-child(4n+2) .col-cont{ background: rgba(162, 204, 248, 0.8);}
    .we-col:nth-child(4n+3) .col-cont{ background: rgba(162, 204, 248, 0.6);}
    .we-col:nth-child(4n+4) .col-cont{ background: rgba(162, 204, 248, 0.4);}


</style>
