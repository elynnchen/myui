<template>
    <div class="weui-demo">
        <h1 class="weui-demo-tit">栅格</h1>
        <temp-box title="栅格无缝隙">
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
            <div slot="codediv"><per-code>{{code}}</per-code></div>
        </temp-box>

        <temp-box title="有间隔">
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
            <div slot="codediv"><per-code>{{code}}</per-code></div>
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
                test: WeButtonCode,
                message: 0,
                code: `

               `,
            }
        },
        methods: {

        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .we-col{margin-bottom: 10px;}
    .col-cont{height:30px; width:100%;display: block; }
    .we-col:nth-child(4n+1){ background:#a2ccf8;}
    .we-col:nth-child(4n+2){ background: rgba(162, 204, 248, 0.8);}
    .we-col:nth-child(4n+3){ background: rgba(162, 204, 248, 0.6);}
    .we-col:nth-child(4n+4){ background: rgba(162, 204, 248, 0.4);}
</style>
