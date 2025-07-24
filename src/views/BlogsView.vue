<script>
import Card from '@/components/BlogCard.vue'
import { useBlogStore } from '@/stores/blogs'

export default {
  components: {
    Card,
  },
  data() {
    return {
      blogStore: useBlogStore(),
    }
  },
}
</script>

<template>
  <main class="my-10">
    <section class="bg-white">
      <div class="container px-6 py-10 mx-auto">
        <!-- Header -->
        <div class="text-center">
          <h1 class="text-2xl font-semibold text-indigo-600 capitalize lg:text-3xl">
            From the blog
          </h1>
          <p class="max-w-lg mx-auto mt-4 text-gray-500">
            Salami mustard spice tea fridge authentic Chinese food dish salt tasty liquor. Sweet
            savory foodtruck pie.
          </p>
        </div>

        <!-- Blog cards -->
        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <Card v-for="(blog, index) in blogStore.blogs" :key="index" :blog="blog" />
        </div>
      </div>
    </section>
  </main>
</template>
