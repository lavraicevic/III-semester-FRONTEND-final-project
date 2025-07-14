<script>
import FooterItem from '@/components/FooterItem.vue'

export default {
  components: {
    FooterItem,
  },
  data() {
    return {
      items: ['Overview', 'Features', 'Pricing', 'Careers', 'Help', 'Privacy'],
    }
  },
}
</script>

<template>
  <footer class="bg-neutral-100 border-t border-neutral-400">
    <div class="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
      <a href="#">
        <img class="w-auto h-7" src="@/assets/logo.svg" alt="" />
      </a>

      <div class="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
        <FooterItem v-for="(item, index) in items" :key="index">{{ item }}</FooterItem>
      </div>

      <p class="mt-6 text-sm text-gray-500 lg:mt-0">
        &copy; Copyright {{ new Date().getFullYear() }} Blog Page
      </p>
    </div>
  </footer>
</template>
