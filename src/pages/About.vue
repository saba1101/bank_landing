<script setup>

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
                <div class="right_side" data-aos="fade-right" >

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
                margin-top: 35px;
                display: inline-flex;
                .icon_btn{
                    margin-left: 30px;
                    img{}
                    &:first-child{
                        margin-left: 0;
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