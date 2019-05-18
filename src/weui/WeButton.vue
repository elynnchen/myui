<template>
    <button class="we-button">
        <slot></slot>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-loding"></use>
        </svg>
    </button>
</template>

<script>
    export default {
        name: 'WeButton',
        components:{
        }
    }

</script>


<style>


</style>
