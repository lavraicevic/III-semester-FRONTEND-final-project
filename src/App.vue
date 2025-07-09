<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Nav />
  <div class="pt-20">
    <RouterView />
  </div>
  

  <Footer />
</template>
