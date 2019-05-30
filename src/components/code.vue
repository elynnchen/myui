<template>
  <div class="codebox">
    <h2>展示代码</h2>
    <pre v-highlightjs><code class="html"><slot></slot></code></pre>
  </div>
</template>


<script>
  export default {
    name: 'percode',
    components:{
    },
    props:{
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

</style>