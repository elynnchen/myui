<template>
   <div class="we-row">
      <slot></slot>
   </div>
</template>

<script>

    export default {
        name: 'WeRow',
        props:{
            name:{}
        }


    }

</script>


<style>
    .we-row{ display: flex}

</style>
