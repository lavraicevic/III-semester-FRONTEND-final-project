<script>
import { useBlogStore } from '@/stores/blogs'

export default {
  data() {
    return {
      blog: null,
    }
  },
  created() {
    const blogStore = useBlogStore()

    const blogId = this.$route.params.id
    this.blog = blogStore.blogs.find((b) => String(b.id) === String(blogId))
  },
}
</script>

<template>
  <div
    class="mx-auto my-10 py-5 w-1/2 grid place-content-center rounded-xl border border-indigo-300 text-center"
  >
    <div v-if="blog">
      <h1 class="text-3xl font-semibold mb-2">{{ blog.title }}</h1>
      <p class="text-neutral-500 mb-5">{{ blog.body }}</p>

      <div class="w-full px-10">
        <img :src="blog.image" alt="" class="border border-gray-300 rounded-xl mb-4" />
        <p class="text-lg text-neutral-800 text-justify">{{ blog.description }}</p>
      </div>
    </div>
    <div v-else>
      <p>Blog not found.</p>
    </div>
  </div>
</template>
