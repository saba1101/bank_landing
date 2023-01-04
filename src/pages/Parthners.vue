<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

</script>

<template>
    <div class="parthners">
        <swiper
            :slides-per-view="5"
            :centered-slides="true"
            :loop="true"
        >
            <swiper-slide>
                <div class="slide">
                    <img src="@/assets/images/slides/slide1.png" alt="">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide">
                    <img src="@/assets/images/slides/slide2.png" alt="">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide">
                    <img src="@/assets/images/slides/slide3.png" alt="">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide">
                    <img src="@/assets/images/slides/slide4.png" alt="">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide">
                    <img src="@/assets/images/slides/slide1.png" alt="">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide">
                    <img src="@/assets/images/slides/slide2.png" alt="">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide">
                    <img src="@/assets/images/slides/slide3.png" alt="">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide">
                    <img src="@/assets/images/slides/slide4.png" alt="">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
.parthners{
    margin-top: 3.125rem;
    .slide{
        width: 7.5rem;
        height: 7.5rem;
        transition: $transition;

        &:hover{
            transform: translateY(-0.625rem);
            img{
                filter: invert(100%) sepia(0%) saturate(3514%) hue-rotate(217deg) brightness(122%) contrast(100%);
            }
        }

        @include centerItem();
        img{
            width: 9.375rem;
        }
    }
}
</style>