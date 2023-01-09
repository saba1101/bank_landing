<script setup>
import { ref } from "@vue/reactivity";


const footer_data = ref(
    [
        {
            title: 'Usefull Links',
            data: ['Content','How It Works','Create','Explore','Terms & Services']
        },
        {
            title: 'Community',
            data: ['Help Center','Partners','Suggestions','Blog','Newsletters']
        },
        {
            title: 'Partner',
            data: ['Our Partner','Becode a Partner']
        }
    ]
)

</script>

<template>
    <footer data-aos="fade-bottom">
        <div class="top">
            <ul class="logo_content">
                <li>
                    <div class="logo_wrapper">
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
                    <div class="description">
                        <p>
                            A new way to make the payments easy, reliable and secure.
                        </p>
                    </div>
                </li>
            </ul>
            <ul v-for="(d,ind) in footer_data" :key="ind">
                <li>
                   <span class="title"> {{d.title}} </span> 
                </li>
                <li v-for="(i,index) in d.data" :key="index">
                    <span> {{ i }} </span>
                </li>
            </ul>
        </div>
        <div class="bottom">
            <div class="copyright">
                <span>Copyright ©</span>
                <span>
                    2023 HooBank. All Rights Reserved.
                </span>
            </div>
            <ul class="socials">
                <li>
                    <img src="@/assets/socials/facebook.svg" alt="">
                </li>
                <li>
                    <img src="@/assets/socials/linkedin.svg" alt="">
                </li>
                <li>
                    <img src="@/assets/socials/twitter.svg" alt="">                    
                </li>
                <li>
                    <img src="@/assets/socials/youtube.svg" alt="">
                </li>
            </ul>
        </div>
    </footer>
</template>

<style lang="scss" scoped>

footer{
    margin-top: 4.375rem;
}

.top{
    padding-bottom: 2.1875rem;
    @include flex(space-between,flex-start,row);
    ul{
        &.logo_content{
            li{
                @include flex(flex-start,flex-start,column);
                .logo_wrapper{
                    @include flex(flex-start,center,row);
                    
                }
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

                .description{
                    max-width: 25rem;
                    margin-top: 1.5625rem;
                    p{
                        font-size: 1.5625rem;
                        color: rgba(#ffffff,.6);
                    }
                }

            }
        }
    }

    ul:not(.logo_content){
        li{
            margin-top: 0.75rem;
            span{
                font-size: 1rem;
                color: rgba(#FFFFFF,.5);

                &.title{
                    color: #FFFFFF;
                    font-size: 1.2rem;
                }
            }
        }
    }
}

.bottom{
    padding-top: 2.1875rem;
    border-top: 0.0625rem solid rgba(#ffffff,.2);
    @include flex(space-between,center,row);
    .copyright{
        span{
            font-size: 1rem;
            color: rgba(#ffffff,.5);
        }
    }

    .socials{
        @include flex(flex-start,center,row);
        gap: 0.9375rem;
        li{
            width: 1.75rem;
            cursor: pointer;

            img{
                pointer-events: none;
                width: 100%;
            }
        }
    }
}

</style>