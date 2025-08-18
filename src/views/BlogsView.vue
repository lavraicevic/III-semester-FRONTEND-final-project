<script>
import Card from '@/components/BlogCard.vue'
import { useBlogStore } from '@/stores/blogs'
import { useAuthorStore } from '@/stores/authors'

export default {
  components: {
    Card,
  },
  data() {
    return {
      blogStore: useBlogStore(),
      authorStore: useAuthorStore(),
      selectedFilter: null,
      searchQuery: '',
    }
  },
  computed: {
    filteredBlogs() {
      return this.blogStore.blogs.filter((blog) => {
        const matchesAuthor = !this.selectedFilter || blog.author.id === this.selectedFilter
        const matchesSearch = blog.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        return matchesAuthor && matchesSearch
      })
    },
  },
  methods: {
    clearFilter() {
      this.selectedFilter = null
    },
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
        <!-- Search bar -->
        <form class="w-2/5 mx-auto mt-5">
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search amoung blogs"
              required
            />
          </div>
        </form>
        <!-- Sidebar + content -->
        <div class="relative flex items-start gap-10 mt-8 md:mt-16">
          <!-- Sidebar -->
          <div
            class="max-w-100 w-100 sticky top-50 md:w-170 h-auto border border-neutral-400 px-4 py-6 rounded-xl hover:border-neutral-300 text-center"
          >
            <!-- Title and clear button -->
            <div class="relative">
              <h3 class="text-xl mb-2">Filter by authors:</h3>
              <button
                v-if="selectedFilter"
                class="absolute top-[-10px] right-0 border px-2 rounded-full text-indigo-500 cursor-pointer transition-all duration-150 hover:bg-indigo-500 hover:text-white"
                @click="clearFilter"
              >
                X
              </button>
            </div>
            <!-- Filters -->
            <div class="pl-5 flex flex-col gap-1 items-start w-full">
              <label
                v-for="author in authorStore.authors"
                class="flex items-center gap-2 text-lg cursor-pointer w-full"
              >
                <input
                  type="radio"
                  name="author"
                  :value="author.id"
                  v-model="selectedFilter"
                  class="peer hidden"
                />
                <span
                  class="border-b-2 border-transparent peer-checked:border-blue-500 pb-1 transition-all duration-200"
                >
                  {{ author.name }}
                </span>
              </label>
            </div>
          </div>
          <!-- Blog cards -->
          <div class="relative grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <!-- Blogs -->
            <Card v-for="(blog, index) in filteredBlogs" :key="index" :blog="blog" :index="index" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
