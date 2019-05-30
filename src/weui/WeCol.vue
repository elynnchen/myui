<template>
    <div class="we-col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: 'WeCol',
        props:{
            span:{Number,String}
        }
    }

</script>


<style lang="scss">
    $class-sprefix:col-;
    .we-col{
        width: 50%;
        @for $n from 1 through 24{//循环生成col-n
            &.#{$class-sprefix}#{$n}{
                width:($n/24)*100%;
            }
        }


    }


</style>
