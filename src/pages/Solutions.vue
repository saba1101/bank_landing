<script setup>
import { ref } from "@vue/reactivity";

const data = ref(
    [
        {
            description: 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
            name: 'Herman Jensen',
            position: 'Founder & Leader',   
        },
        {
            description: "Money makes your life easier. If you're lucky to have it, you're lucky.",
            name: 'Steve Mark',
            position: 'Founder & Leader',   
        },
        {
            description: 'It is usually people in the money business, finance, and international trade that are really rich.',
            name: 'Kenn Gallagher',
            position: 'Founder & Leader',   
        }
    ]
)
</script>

<template>
    <div class="solutions" data-aos="fade-top">
        <ul>
            <li v-for="(i,ind) in data" :key="ind">
                <div class="top">
                    <img src="@/assets/icons/quote.svg" alt="">
                </div>
                <div class="middle">
                    <p>{{ i.description }}</p>
                </div>
                <div class="bottom">
                    <div class="image_avatar">
                        <img v-if="ind === 0" src="@/assets/images/avatar1.svg" alt="">
                        <img v-if="ind === 1" src="@/assets/images/avatar2.svg" alt="">
                        <img v-if="ind === 2" src="@/assets/images/avatar3.svg" alt="">
                    </div>
                    <div class="info">
                        <span class="name">{{ i.name }}</span>
                        <span class="position">{{ i.position }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

.solutions{
    width: 100%;
    ul{
        width: 100%;
        @include flex(space-between,center,row);
        border-bottom: 0.1875rem solid transparent;
        border-top: 0.1875rem solid transparent;
        transition: $transition;
        border-radius: 0.3125rem;

        &:hover{
            border-bottom: 0.1875rem solid rgba(#fff,.5);
            border-top: 0.1875rem solid rgba(#fff,.5);


            li{
                transform: scale(1.1);
                opacity: .4;
            }
        }
        
        li{
            max-width: 24.375rem;
            height: 24.6875rem;
            @include flex(space-evenly,flex-start,column);
            border-radius: 1.25rem;
            padding: 3.75rem 2.5rem;
            transition: $transition;

            &:hover{
                opacity: 1;
            }

            .top{
                img{
                    width: 2.625rem;
                }
            }

            .middle{
                margin-top: 1.5625rem;
                p{
                    font-size: 1.125rem;
                    line-height: 2rem;
                    color: #ffffff;
                }
            }
            .bottom{
                margin-top: 1.875rem;
                @include flex(flex-start,center,row);
                .image_avatar{
                    img{
                        width: 3rem;
                    }
                }
                .info{
                    margin-left: 0.9375rem;
                    @include flex(flex-start,flex-start,column);
                    .name{
                        font-size: 1.25rem;
                        color: #ffffff;
                        line-height: 2rem;
                    }
                    .position{
                        font-size: 1rem;
                        line-height: 1.5rem;
                        color: rgba(#ffffff,.6);
                    }
                }
            }

        }
    }
}
</style>