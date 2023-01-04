<script setup>

</script>

<template>
    <footer>
        <div class="top">
            <ul class="logo_content">
                <li>
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
                    <div class="description">
                        A new way to make the payments easy, reliable and secure.
                    </div>
                </li>
            </ul>
        </div>
        <div class="bottom">

        </div>
    </footer>
</template>

<style lang="scss" scoped>

footer{
    margin-top: 3.4375rem;
}

.top{
    ul{
        &.logo_content{
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
    }
}

</style>