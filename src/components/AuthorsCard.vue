<script>
import Card from '@/components/BlogsInAuthor.vue'

export default {
  components:{
    Card
  },
  data() {
    return {
      toggled: false,
      someArray: [1,2,3,4]
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
  <section class="bg-white my-10">
    <div class="container px-6 py-10 mx-auto bg-neutral-100 rounded-xl">
      <div class="lg:-mx-6 lg:flex lg:items-center lg:justify-around">
        <img
          class="object-cover object-center lg:mx-6 w-full h-96 rounded-lg lg:w-2/5 lg:h-[25rem]"
          src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />

        <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0 rounded-xl py-10">
          <p class="text-5xl font-semibold text-blue-500">“</p>

          <h1 class="text-2xl font-semibold text-gray-800 lg:text-3xl lg:w-96">
            Help us improve our productivity
          </h1>

          <p class="max-w-lg mt-6 text-gray-500">
            “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus
            libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus
            assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a. ”
          </p>

          <h3 class="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
          <p class="text-gray-600">Marketing Manager at Stech</p>
          <!-- dropdown -->
          <div class="mt-10 flex justify-end mx-10" @click="toggle">
            <div class="border p-3 rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-6 text-gray-800 transition-transform duration-300"
                :class="toggled ? 'rotate-180' : ''"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Dropdown menu -->
    <section class="container py-10 mx-auto grid grid-cols-4 gap-5 transition-all" :class="toggled ? '' : 'hidden' ">
      <!-- Authors Blogs -->
      <Card v-for="items in someArray"/>
    </section>

  </section>
  
  
  
</template>
