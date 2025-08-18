<script>
import CheckedItems from '@/components/AuthorsChecked.vue'
import AuthorsCard from '@/components/AuthorsCard.vue'
import { useAuthorStore } from '@/stores/authors'

export default {
  components: {
    CheckedItems,
    AuthorsCard,
  },
  data() {
    return {
      checked: [
        'Authentic voices',
        'Real stories & insights',
        'Diverse backgrounds',
        'Expert opinions',
        'Personal reflections',
        'Always growing',
      ],
      toggled: false,
      authorStore: useAuthorStore(),
    }
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled
    },
  },
}
</script>

<template>
  <main class="my-10">
    <!-- Intro to Authors page -->
    <section class="bg-white">
      <div
        class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center"
      >
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <!-- Heading and description of the page -->
            <h1 class="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl">
              Meet the people behind the words
            </h1>
            <p class="mt-4 text-gray-600">
              Our blog is powered by passionate writers, thoughtful thinkers, and curious minds.
              Each author brings their own voice, experience, and perspective — making every article
              a unique read worth exploring.
            </p>
            <!-- "Checked" Items -->
            <div class="grid gap-6 mt-8 sm:grid-cols-2">
              <CheckedItems v-for="(items, index) in checked">{{ items }}</CheckedItems>
            </div>
          </div>
        </div>
        <!-- Image to make it more colorfull -->
        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            class="object-cover w-full h-full max-w-2xl rounded-md"
            src="https://plus.unsplash.com/premium_photo-1683133363261-230bea48bb55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="glasses photo"
          />
        </div>
      </div>
    </section>

    <!-- Description to author page -->
    <section class="bg-white py-16 border-t border-gray-200">
      <div class="container mx-auto px-10 max-w-4xl text-center">
        <h2 class="text-3xl font-medium text-indigo-500 tracking-tight lg:text-4xl">
          Writing with intention, connection, and care
        </h2>
        <p class="mt-6 text-lg text-gray-700 leading-relaxed tracking-wide">
          Every piece shared here is more than just words on a screen. It's an expression of
          thought, feeling, and curiosity. We believe in slowing down, listening closely, and
          creating space for stories that matter - stories that connect, soothe, and sometimes
          quietly challenge.
        </p>
      </div>
    </section>

    <!-- Authors -->
  </main>
</template>
