<template>
    <svg class="svg-icon" aria-hidden="true">
        <use v-bind:xlink:href="`#${name}`"></use>
    </svg>
</template>

<script>
    export default {
        name: 'WeSvgicon',
        props:{
            name:{}
        }


    }

</script>


<style>
.svg-icon{ width:16px;height:16px; vertical-align: middle;}
</style>
