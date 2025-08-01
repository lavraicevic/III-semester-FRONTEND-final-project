<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
}
</script>

<template>
  <div class="border border-neutral-300 p-2 rounded-xl">
    <div class="relative">
      <!-- Blog image -->
      <img
        class="object-cover object-center ring ring-neutral-300 w-full h-64 rounded-lg lg:h-80"
        :src="blog.image"
        alt="Blog image"
      />
      <!-- Author name, job and Avatar -->
      <div
        class="absolute ml-1 bottom-[-20px] flex p-3 bg-white border border-neutral-300 rounded-xl"
      >
        <img
          class="object-cover object-center w-10 h-10 rounded-full"
          :src="blog.author.avatar"
          alt="Avatar"
        />

        <div class="mx-4">
          <h1 class="text-sm text-gray-700">{{ blog.author.name }}</h1>
          <p class="text-sm text-gray-500">{{ blog.author.job }}</p>
        </div>
      </div>
    </div>

    <h1 class="mt-6 text-xl font-semibold text-gray-800">
      {{ blog.title }}
    </h1>

    <hr class="w-32 my-6 text-blue-500" />

    <p class="text-sm text-gray-500">
      {{ blog.body }}
    </p>
    <RouterLink :key="blog.id" :to="`/blogs/${blog.id}`">
      <p class="inline-block mt-4 text-indigo-500 underline cursor-pointer hover:text-blue-400">
        Read more
      </p>
    </RouterLink>
  </div>
</template>
