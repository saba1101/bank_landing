<script setup>
import Header from '@/components/layout/Header.vue'
import Home from '@/pages/Home.vue'
</script>

<template>
  <div class="page_wrapper">
      <Header
        data-aos="flip-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      />
      <section id="home_section" > <Home/> </section>
  </div>
</template>

<style lang="scss">
.page_wrapper{
  padding:  1.25rem 8.4375rem;
  margin: auto;
  min-height: 100vh;
  background-image: linear-gradient(229deg, rgba(#89f7fe,.5) -80%, transparent 80%);

  .section{

  }
}

</style>
