<template>
  <div class="weui-demo-item">
    <h2 class="weui-demo-item-hd">{{title}}</h2>
    <div class="weui-demo-item-bd">
      <div class="box">
      <slot></slot>
      </div>
      <slot name='codediv'></slot>
      </div>
    </div>

</template>


<script>
  export default {
    name: 'percode',
    components:{
    },
    props:{
      title:{}
    },
    data(){
      return{

      }
    },
    methods:{

    }
  }

</script>
<style lang="scss">
  .codebox{
    padding:20px;
    background: #f5f5f5;
    h2{font-size: 16px;}
    .hljs{ background: #f5f5f5;}
  }
  .box button {
    vertical-align: top;
    margin-right: 10px;
  }
  .box{ padding:20px;}
  .weui-demo-item-bd{border:1px solid #ddd;}
</style>