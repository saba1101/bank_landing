<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const notations = ref([
    {
        title: 'TRUSTED BY COMPANY',
        from: 0,
        to: 76,
        range: 0,
        prefix: ''
    },
    {
        title: 'TRANSACTION',
        from: 0,
        to: 230,
        range: 0,
        prefix: '$'
    },
    {
        title: 'User Active',
        from: 0,
        to: 580,
        range: 0,
        prefix: ''
    },
    {
        title: 'Rates',
        from: 0,
        to: 330,
        range: 0,
        prefix: ''
    }
])
let countRanges = () => {
    notations.value.forEach(el => {
        if(el.range === el.to) return
        el.range = el.from+=1
    })
}
let counterInterval = setInterval(countRanges,1);
setTimeout(() => {
    clearInterval(counterInterval)
}, 3000);
</script>

<template>
    <div class="home">
        <div class="home_top">
            <div class="home_top_left">
                <div data-aos="flip-up" class="ad_placeholder">
                    <div class="image_discount">
                        <img src="@/assets/icons/discount.svg" alt="">
                    </div>
                    <div class="title">
                        <span>
                            20% DISCOUNT FOR 1 MONTH ACCOUNT
                        </span>
                    </div>
                </div>
                <div data-aos="fade-right" class="home_info">
                    <div class="titles">
                        <span style="color: #fff">
                            The Next
                        </span>
                        <span class="middle_title" style="color: #5CE1E6">
                            Generation
                        </span>
                        <span style="color:#fff">
                            Payment Method
                        </span>
                        <div class="description">
                            <p>
                                Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                                We examine annual percentage rates, annual fees.
                            </p>
                        </div>
                    </div>
                    <div class="get_started_btn">
                        <div class="wrapper_btn_content">
                            <span>
                                Get
                                <img src="@/assets/icons/arrow_up.svg" alt="">
                            </span>
                            <span>Started</span>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" class="home_top_right">
                <div class="gradients">
                    <div 
                        :class="['gradient_circle',`circle_${i}`]"
                        data-aos="zoom-in"
                        v-for="i in 5" :key="i"
                    >

                    </div>
                </div>
                <div class="card_images_wrapper">
                    <div 
                        v-for="(card,ind) in ['top','middle','bottom']" 
                        :key="ind" 
                        :class="['single_card',card]"

                    >
                        <img v-if="card === 'top'" src="@/assets/images/card_top_part.png" alt="">
                        <img v-if="card === 'middle'" src="@/assets/images/card_middle_part.png" alt="">
                        <img v-if="card === 'bottom'" src="@/assets/images/card_bottom_part.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="fade-left" class="home_bottom">
            <ul>
                <li v-for="(item,ind) in notations" :key="ind">
                    <span class="range">
                        {{item.prefix}}{{item.range}}+
                        </span>
                    <span class="title">
                        {{item.title}}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.home{
    width: 100%;
    padding-top: 2.1875rem;
    @include flex(unset,center,column);
    position: relative;

    .home_top{
        width: 100%;
        padding-top: 1.25rem;
        @include flex(space-between,center,row);
        .home_top_left,.home_top_right{
            width: calc(100% / 2);
        }

        .home_top_left{
            .ad_placeholder{
                width: 23.125rem;
                @include flex(unset,center,row);
                padding: 0.625rem;
                border-radius: 0.625rem;
                background: rgba(#272727,.6);

                .image_discount{
                    @include centerItem;
                }

                img{
                    width: 1.875rem;
                }
                span{
                    white-space: nowrap;
                    margin-left: 0.625rem;
                    color: rgba(#ffffff,.9);
                    font-weight: 400;
                }
            }

            .home_info{
                margin-top: 1.25rem;
                position: relative;
                .titles{
                    span{
                        font-size: 4.375rem;
                        font-weight: 700;
                        text-shadow: 0.9375rem 0.9375rem 0.625rem rgba(#FFF,.2);
                        animation: switch_shadow_default 2s infinite alternate;
                        &.middle_title{
                            text-shadow: 0.9375rem 0.9375rem 0.625rem rgba(#5CE1E6,.2);
                              animation: switch_shadow_diff 2s infinite alternate;
                        }

                        @keyframes switch_shadow_default {
                            from{
                                text-shadow: 0.9375rem 0.9375rem 0.625rem rgba(#FFF,.1);
                            }
                            to{
                                text-shadow: 0.9375rem 0.9375rem 0.625rem rgba(#FFF,.3);
                            }
                        }
                        @keyframes switch_shadow_diff {
                            from{
                                text-shadow: 0.9375rem 0.9375rem 0.625rem rgba(#5CE1E6,.1);
                            }
                            to{
                                text-shadow: 0.9375rem 0.9375rem 0.625rem rgba(#5CE1E6,.4);
                            }
                        }
                    }
                    
                    .description{
                        margin-top: 2.5rem;
                        width: 28.125rem;
                        p{
                            font-size: 1.125rem;
                            line-height: 1.5625rem;
                            font-weight: 300;
                            color: rgba(#ffffff,.7);
                        }
                    }
                }
                .get_started_btn{
                    position: absolute;
                    right: 0;
                    top: 0;
                    border-radius: 50%;
                    width: 8.75rem;
                    height: 8.75rem;
                    border: 0.125rem solid rgba(#5CE1E6,.5);
                    @include centerItem;
                    transition: $transition;
                    cursor: pointer;
                    *{
                        user-select: none;
                    }

                    &:hover{
                        border: 0.125rem solid rgba(#5CE1E6,1);
                    }

                    .wrapper_btn_content{

                        span{
                            color: $cyan;
                            display: block;
                            line-height: 1.5625rem;
                            font-weight: 700;
                            font-size: 1.1875rem;
                            position: relative;
    
                            img{
                                position: absolute;
                                top: 50%;
                                right: 0.3125rem;
                                transform: translate(0,-50%);
                                width: 1.4375rem;
                            }
                        }
                    }

                }
            }
        }

        .home_top_right{
            position: relative;
            height: 450px;

            &:hover{
                .single_card{
                    &.top{
                            transform: translateY(-50px);
                        }
                    &.middle{
                        transform: translateY(30px);
                    }
                    &.bottom{
                        transform: scale(.8);
                    }
                }
            }

            .gradients{
                .gradient_circle{
                    position: absolute;
                    width: 4.375rem;
                    height: 4.375rem;
                    border-radius: 50%;
                    background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
                    box-shadow: 0 0 70px 10px rgba(#66a6ff,.2);

                    &.circle_1{
                        top: 10%;
                        left: 30%;
                    }
                    &.circle_2{
                        top: 70%;
                        left: 60%;
                        opacity: .2;
                    }
                    &.circle_3{
                        top: 0;
                        left: 0;
                        opacity: 1;
                    }
                    &.circle_4{
                        top: 100%;
                        left: 30%;
                        opacity: .1;
                    }
                    &.circle_5{
                        top: 100%;
                        left: 100%;
                        opacity: .3;
                    }
                }
            }
            .card_images_wrapper{
                width: 100%;
                position: relative;
                .single_card{
                    user-select: none;
                    position: absolute;
                    left: 7.5rem;
                    transition: $transition;

                    img{
                        width: 34.375rem;
                    }

                    &.top{
                        z-index: 3;
                        top: 0;
                    }
                    &.middle{
                        z-index: 3;
                        top: 3.125rem;
                    }
                }
            }
        }
    }

    .home_bottom{
        margin-top: 7rem;
        ul{
            @include flex(space-between,center,row);

            &:hover{
                li{
                    opacity: .2;
                }
            }

            li{
                padding: 0 90px;
                @include flex(flex-start,center,row);
                border-right: 1px solid rgba(#fff,.2);
                transition: $transition;
                *{
                    user-select: none;
                }

                &:hover{
                    opacity: 1;
                }

                &:last-child{

                    border-right: none;
                }

                span{
                    white-space: nowrap;
                }
                .title{
                    font-size: 20px;
                    color: $cyan;
                    margin-left: 25px;
                }
                .range{
                    margin-left: 0;
                    font-size: 40px;
                    color: #fff;
                    font-weight: 600;
                }
            }
        }
    }
}

</style>