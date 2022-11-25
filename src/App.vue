<script setup>
import Header from '@/components/layout/Header.vue'
</script>

<template>
  <div class="page_wrapper">
      <Header/>
      <h1 v-vue-aos="{animationClass:'fadeIn animated'}" v-for="i in 500" :key="i">AOS_test</h1>
  </div>
</template>

<style lang="scss">
.page_wrapper{
  padding:  1.25rem 8.4375rem;
  margin: auto;
}
</style>
