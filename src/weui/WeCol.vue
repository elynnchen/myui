<template>
    <div class="we-col" :class="[span && `col-${span}`,offset && `offset-${offset}`]"
    :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: 'WeCol',
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type:[Number,String]
            }

        },
        data(){
            return{gutter:0}
        },
        created(){
            console.log('col created')
        },
        mounted(){
            console.log('col mounted')
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
        $offset-prefix:offset-;
        @for $n from 1 through 24{//循环生成col-n
            &.#{$offset-prefix}#{$n}{
                margin-left:($n/24)*100%;
            }
        }

    }


</style>
