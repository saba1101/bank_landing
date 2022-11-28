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
  // background-image: linear-gradient(229deg, rgba(#89f7fe,.5) -80%, transparent 80%);
  background-image: linear-gradient(226deg, rgba(137, 247, 254, 0.2) 0%, transparent 71%);

  .section{

  }
}

</style>
