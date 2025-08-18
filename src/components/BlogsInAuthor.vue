<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
}
</script>
<template>
  <div class="w-full overflow-hidden rounded-lg shadow-lg border border-neutral-200">
    <img
      class="object-cover w-full h-56 border-b border-neutral-300"
      :src="blog.image"
      alt="avatar"
    />

    <div class="py-5 text-center px-2">
      <a href="#" class="block text-xl font-bold text-gray-800" tabindex="0" role="link">{{
        blog.title
      }}</a>
      <span class="text-sm text-neutral-500">{{ blog.body }}</span>
    </div>
  </div>
</template>
