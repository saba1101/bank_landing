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
            .logo {
                cursor: pointer;
                user-select: none;
                img{
                    width: 1.875rem;
                    pointer-events: none;
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

                    &:first-child{
                        margin-left: 0;
                    }

                    &:hover{
                        transform: translateY(-0.8125rem);
                    }

                    span{
                        font-size: 1.1875rem;
                        color: rgba(#FFFFFF,.7);
                        font-weight: 100;
                    }
                }
            }
        }
    }
</style>