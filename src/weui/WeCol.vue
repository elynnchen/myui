<template>
    <div class="we-col" :class="Classes"
    :style="colStyle">
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
        data(){//Data里的数据是，当Create会到Data里读数据之后不会再读
            return{
                gutter:0

            }
        },
        computed:{//如果一个属性是根据另一个属性变的，应该用 computed.它是个函数，写法要有return一个对象
            colStyle(){
                return{
                    paddingLeft:this.gutter/2+'px',
                    paddingRight:this.gutter/2+'px'
                }
            },
            Classes(){//返回一个数组
                return[
                    this.span && `col-${this.span}`,
                    this.offset && `offset-${this.offset}`
                ]
            },

        },
        created(){

        },
        mounted(){

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
