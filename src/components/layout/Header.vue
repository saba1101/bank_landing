<script setup>
import routes from '@/scripts/data.js'
import { ref } from 'vue';

const Navigation_items = ref(routes)

</script>

<template>
    <div class="header">
        <div class="left_side">
            <div class="logo">
                <img src="@/assets/icons/logo.svg" alt="">
            </div>
            <div class="title">
                <span>
                    <span class="pref">
                        GG
                    </span>
                    Bank
                </span>
            </div>
        </div>
        <div class="right_side">
            <ul>
                <li 
                    v-for="(item,index) in Navigation_items"
                    :key="index"
                >
                    <span v-vue-aos="{animationClass:'fadeIn animated'}">
                        {{item.label}}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .header{
        width: 100%;
        @include flex(space-between,center,row);
        padding: 1rem 0;
        position: sticky;
        top: 0;
        transition: $transition;

        .left_side{
            @include flex(flex-start,center,row);
            .logo {
                cursor: pointer;
                user-select: none;
                img{
                    width: 1.875rem;
                    pointer-events: none;
                }
            }

            .title{
                margin-left: 0.9375rem;
                cursor: pointer;
                span{
                    font-size: 1.375rem;
                    color: #FFFFFF;
                    font-weight: 700;

                    & > .pref{
                        font-size: 1.625rem;
                        color: $cyan;
                    }
                }
            }
        }

        .right_side{
            ul{
                display: inline-flex;

                li{
                    margin-left: 1.875rem;
                    padding: 0.625rem;
                    transition: $transition;
                    cursor: pointer;
                    user-select: none;
                    position: relative;

                    &:first-child{
                        margin-left: 0;
                    }
                    &::before,&::after{
                        content: '';
                        display: block;
                        position: absolute;
                        transition: $transition;
                    }
                    &::before{
                        width: 0;
                        height: 0.0625rem;
                        background: rgba(#5CE1E6,.5);
                        top: 0;
                        left: 0;
                    }
                    &::after{
                        width: 0;
                        height: 0.125rem;
                        background: rgba(#5CE1E6, .9);
                        bottom: -0.0625rem;
                        right: 0;
                    }

                    &:hover{
                        transform: translateY(-0.8125rem);
                        &::before{
                            width: calc(100% - 1.25rem);
                        }
                        &::after{
                            width: calc(100% - 0.3125rem);
                        }
                        span{
                            color: $cyan;
                        }
                    }

                    span{
                        font-size: 1.1875rem;
                        color: rgba(#FFFFFF,.7);
                        font-weight: 100;
                        transition: $transition;
                    }
                }
            }
        }
    }
</style>