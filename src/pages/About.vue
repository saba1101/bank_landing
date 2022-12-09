<script setup>
import { ref } from "@vue/reactivity";

const transactions = ref([
    {
        title: 'Dribbble Pro',
        key: 'dribble',
        recentTransaction: '15 Days ago',
        amount: '-$250.93'
    },
    {
        title: 'Netflix',
        key: 'netflix',
        recentTransaction: '4 Days ago',
        amount: '-$90.00'
    },
    {
        title: 'Manulife Cash',
        key: 'manulife',
        recentTransaction: '2 Days ago',
        amount: '-$1320.00'
    }
])
</script>

<template>
    <div class="about">
        <ul>
            <li>
                <div class="left_side" data-aos="fade-right">
                    <div class="content_wrapper">
                        <div class="title">
                            <span>
                                You do the business, we’ll handle the money.
                            </span>
                        </div>
                        <div class="description">
                            <span>
                                With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
                            </span>
                        </div>
                        <div class="action">
                            <button>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                <div class="right_side" >
                    <ul class="items">
                        <li class="item" data-aos="fade-left" data-aos-delay="100">
                            <div class="icon">
                                <div class="icon_wrapper">
                                    <img src="@/assets/icons/star.svg" alt="">
                                </div>
                            </div>
                            <div class="text">
                                <span>
                                    Rewards
                                </span>
                                <p>
                                    The best credit cards offer some tantalizing combinations of promotions and prizes
                                </p>
                            </div>
                        </li>
                        <li class="item" data-aos="fade-left" data-aos-delay="300">
                            <div class="icon">
                                <div class="icon_wrapper">
                                    <img src="@/assets/icons/secure.svg" alt="">
                                </div>
                            </div>
                            <div class="text">
                                <span>
                                    100% Secured
                                </span>
                                <p>
                                    We take proactive steps make sure your information and transactions are secure.
                                </p>
                            </div>
                        </li>
                        <li class="item" data-aos="fade-left" data-aos-delay="500">
                            <div class="icon">
                                <div class="icon_wrapper">
                                    <img src="@/assets/icons/send.svg" alt="">
                                </div>
                            </div>
                            <div class="text">
                                <span>
                                    Balance Transfer
                                </span>
                                <p>
                                    A balance transfer credit card can save you a lot of money in interest charges.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="left_side" data-aos="fade-left">
                    <div class="content_wrapper">
                        <div class="title">
                            <span>
                                Easily control your billing & invoicing.
                            </span>
                        </div>
                        <div class="description">
                            <span>
                                Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                            </span>
                        </div>
                        <div class="action_btns">
                            <div class="icon_btn">
                                <img src="@/assets/images/appstore.png" alt="">
                            </div>
                            <div class="icon_btn">
                                <img src="@/assets/images/googleplay.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right_side col_3" data-aos="fade-right" >
                    <div class="paypal">
                        <div class="title">
                            <div class="paypal_img">
                                <img src="@/assets/images/paypal.svg" alt="">
                            </div>
                            <div class="text">
                                <h2>Paypal</h2>
                                <span>Checkout</span>
                            </div>
                        </div>
                        <div class="paypal_content">
                            <span>
                                Total
                                <br>
                                <span>
                                    $210
                                </span>
                            </span>
                            <button>Change</button>
                        </div>
                        <div class="paypal_action">
                            <button>Make Payment</button>
                        </div>
                    </div>
                    <div class="transactions">
                        <div class="title">
                            <h2>
                                Last Transaction
                            </h2>
                        </div>
                        <div class="transactions_list">
                            <div 
                                class="single_transaction"
                                v-for="(t,ind) in transactions"
                                :key="ind"
                            >
                                <div class="left">
                                    <div class="transaction_img">
                                        <img v-if="(t.key === 'dribble')" src="@/assets/images/dribble.svg" alt="">
                                        <img v-if="(t.key === 'netflix')" src="@/assets/images/netflix.svg" alt="">
                                        <img v-if="(t.key === 'manulife')" src="@/assets/images/manulife.svg" alt="">
                                    </div>
                                    <div class="title">
                                        <span>
                                            {{t.title}}
                                            <br>
                                            <span>
                                                {{t.recentTransaction}}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div class="right">
                                    <span>
                                        {{t.amount}}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="col_4">
                <div class="left_side" data-aos="fade-left" >
                    <h1>
                        What people are saying about us
                    </h1>
                </div>
                <div class="right_side" data-aos="fade-right" >
                    <p>
                        Everything you need to accept card payments and grow your business anywhere on the planet.
                        Everything you need to accept card payments and grow your business anywhere on the planet.
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.about{
    width: 100%;
    margin-top: 5.625rem;
    overflow-x: hidden;

    ul:not(.items){
        width: 100%;
        @include flex(unset,center,column);

        li{
            width: 100%;
            @include flex(space-between,center,row);
            overflow: hidden;
            margin-top: 6.25rem;
            
            &:first-child{
                margin-top: 0;
            }

            &.col_4{
                min-height: 300px;

                h1{
                    font-size: 48px;
                    color: #fff !important;
                }
                p{
                    max-width: 450px;
                    font-size: 16px;
                    color: rgba(#fff,.6);
                    line-height: 25px;
                    font-style: italic;

                    &::before,&::after{
                        content: "''";
                    }
                }
            }

            &:nth-child(even):not(.item){
                @include flex(space-between,center,row-reverse);
            }

            .left_side,.right_side{
                width: calc((100% / 2) - 5.125rem);
            }

            .content_wrapper{
                max-width: 37.5rem;
            }
            .title{
                span{
                    font-size: 3rem;
                    line-height: 3.4375rem;
                    color: #ffffff;
                    font-weight: 600;
                }
            }

            .description{
                margin-top: 1.5rem;

                span{
                    color: rgba(#fff,.7);
                    font-size: 1.125rem;
                    line-height: 1.5625rem;
                }
            }

            .action{
                margin-top: 2.1875rem;
                button{
                    color: #FFF;
                    border-radius: 0.75rem;
                    width: 10.625rem;
                    height: 3.75rem;
                    font-size: 1.125rem;
                    cursor: pointer;
                    transition: $transition;
                    background: rgba(#32CCBC,.7);
                    border: 0.3125rem solid transparent;

                    &:hover{
                        background: rgba(#32CCBC,1);
                    }
                }
            }

            .action_btns{
                margin-top: 2.5rem;
                display: inline-flex;
                gap: 0.9375rem;
                .icon_btn{
                    margin-left: 1.875rem;
                    img{
                        width: 7.25rem;
                    }
                    &:first-child{
                        margin-left: 0;
                    }
                }
            }

            .right_side{
                &.col_3{
                    @include flex(space-between,center,row-reverse);
                }

                &:hover{
                    .paypal,.transactions{
                        opacity: .1;
                    }
                }

                .paypal,.transactions{
                    transition: all .3s;

                    &:hover{
                        opacity: 1;
                        width: 100%;
                        z-index: 999;
                    }
                }

                .paypal{
                    width: 15.625rem;
                    padding: 1.875rem 1.5625rem;
                    background: linear-gradient(120deg, rgba(#fff,.2) 30%, rgba(#14101D,.1) 90%);
                    border-radius: 0.625rem;

                    @include flex(unset,center,column);

                    .title{
                        width: 100%;
                        @include flex(flex-start,center,row);
                        
                        .paypal_img{
                            width: 3.5rem;
                            height: 3.5rem;
                            background: rgba(#FFF,.8);
                            @include centerItem;
                            border-radius: 50%;

                            img{
                                width: 1.6875rem;
                            }
                        }
                        .text{
                            margin-left: 1.5625rem;
                            h2{
                                font-size: 1.5rem;
                                color: #fff;
                            }   
                            span{
                                font-size: 1rem;
                                color: rgba(#fff,.6);
                                line-height: 1.1875rem;
                            }
                        }

                    }
                    .paypal_content{
                        width: 100%;
                        margin-top: 1.5rem;
                        @include flex(space-between,center,row);

                        span{
                            font-size: 0.75rem;
                            color: rgba(#fff,.6);
                            
                            span{
                                font-size: 1.125rem;
                                color: #fff;
                            }
                        }

                        button{
                            border: 0.0625rem solid $cyan;
                            color: $cyan;
                            border-radius: 0.3125rem;
                            padding: 0.375rem 0.625rem;
                            cursor: pointer;
                            font-size: .8rem;

                        }
                    }
                    .paypal_action{
                        width: 100%;
                        margin-top: 1.875rem;

                        button{
                            width: 100%;
                            border-radius: 0.3125rem;
                            padding: 0.625rem 0.3125rem;
                            background: $cyan;
                            font-size: 0.9375rem;
                            color: #00030D;
                            cursor: pointer;
                        }
                    }
                }

                .transactions{
                    width: 21.875rem;
                    padding: 1.625rem 1.25rem;
                    @include flex(flex-start,left,column);
                    background: linear-gradient(120deg, rgba(#fff,.2) 30%, rgba(#14101D,.1) 90%);
                    border-radius: 0.625rem;

                    h2{
                        font-size: 1.375rem;
                        color: #fff;
                    }

                    .transactions_list{
                        width: 100%;
                        @include flex(flex-start,center,column);
                        .single_transaction{
                            width: 100%;
                            @include flex(space-between,center,row);
                            margin-top: 1.25rem;
                            .left{
                                @include flex(left,center,row);
                                .transaction_img{
                                    width: 3.5rem;
                                    height: 3.5rem;
                                    border-radius: 50%;
                                    background: rgba( #fff,.4);
                                    overflow: hidden;
                                    @include centerItem;
                                }
                                img{
                                    width: 100%;
                                    object-fit: contain;
                                    aspect-ratio: 3/2;
                                }
                                .title{
                                    margin-left: 0.9375rem;
                                    span{
                                        font-size: 1rem;
                                        color: #fff;
                                        line-height: unset;
                                        span{
                                            font-size: 0.8125rem;
                                            color: rgba(#FFF,.4);
                                        }
                                    }
                                }
                            }

                            .right{
                                span{
                                    color: #f14747;
                                    font-size: 1.125rem;
                                }
                            }
                        }
                    }

                }
            }

            ul{
                @include flex(unset,flex-start,column);
                max-width: 37.5rem;
                padding: 1.25rem 1.875rem;

                li{
                    margin-top: 1.5625rem;
                    @include flex(space-between,center,row);
                    background: rgba(#fff,.1);
                    padding: 1.25rem;
                    border-radius: 1.375rem;
                    cursor: default;

                    .icon{
                        .icon_wrapper{
                            width: 3.125rem;
                            height: 3.125rem;
                            @include centerItem;
                            border-radius: 50%;
                            background: rgba(#fff,.2);
                        }

                        img{
                            width: 1.5625rem;
                        }
                    }
                    .text{
                        margin-left: 2.5rem;
                        span{
                            font-size: 1.1875rem;
                            color: #ffffff;
                        }
                        p{
                            margin-top: 0.625rem;
                            font-size: 1.0625rem;
                            line-height: 1.25rem;
                            color: rgba(#ffffff,.6);
                        }
                    }
                }
            }
        }
    }
}
</style>