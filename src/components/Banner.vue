<script setup>

const props = defineProps({
    title: String,
    description: String,
})

</script>

<template>
    <div class="banner" data-aos="fade-top">
        <div class="left_side">
            <div class="title">
                <span>
                    {{ props.title }}
                </span>
            </div>
            <div class="description">
                <p>
                    {{ props.description }}
                </p>
            </div>
        </div>
        <div class="right_side">
            <button>
                Get Started
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .banner{
        width: 100%;
        padding: 4.375rem 5.625rem;
        background: linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%);
        border-radius: 1.25rem;
        @include flex(space-between,center,row);
        position: relative;
        overflow: hidden;

        &::before{
            content: '';
            position: absolute;
            width: 0.9375rem;
            height: 100%;
            transform: rotate(30deg) scale(2) translateX(-50%);
            top: 0;
            left: 50%;
            background: rgba(#5CE1E6,.1);
        }
        
        .title{
            span{
                font-size: 2rem;
                color: #ffffff;
            }
        }
        .description{
            max-width: 23.125rem;
            margin-top: 1.5625rem;
            line-height: 1.6875rem;
            p{
                font-size: 1.25rem;
                color: rgba(#ffffff,.7);
            }
        }

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
</style>