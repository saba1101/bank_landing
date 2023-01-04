<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Solutions from '@/pages/Solutions.vue'
import Parthners from '@/pages/Parthners.vue'
import Banner from '@/components/Banner.vue'

</script>

<template>
  <div class="page_wrapper">
      <Header
        data-aos="fade-down"
        data-aos-duration="1000"
      />
      <section id="home_section" > <Home/> </section>
      <section id="about_section" > <About/> </section>
      <section id="solutions_section"><Solutions /></section>
      <section id="parthners_section"><Parthners /></section>
      <section id="banner_section"><Banner :title="`Let’s try our service now!`" :description="'Everything you need to accept card payments and grow your business anywhere on the planet.'" /></section>
      <Footer/> 
  </div>
</template>

<style lang="scss">
.page_wrapper{
  padding:  1.25rem 8.4375rem;
  margin: auto;
  min-height: 100vh;
  // background-image: linear-gradient(229deg, rgba(#89f7fe,.5) -80%, transparent 80%);
  background-image: linear-gradient(226deg, rgba(137, 247, 254, 0.2) 0%, transparent 71%);
  overflow-x: hidden;
}

section{
  margin-top: 1.5625rem;
}

</style>
