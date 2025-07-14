<script>
import Card from '@/components/BlogCard.vue'

export default {
  components: {
    Card,
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          BlogImage:
            'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          blogTitle: 'What do you want to know about UI',
          blogDescription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore',
          avatar:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          authorName: 'Tom Hank',
          authorJob: 'Creative Director',
        },
        {
          id: 2,
          BlogImage:
            'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          blogTitle: 'All the features you want to know',
          blogDescription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore',
          avatar:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
          authorName: 'Arthur Melo',
          authorJob: 'Creative Director',
        },
        {
          id: 3,
          BlogImage:
            'https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
          blogTitle: 'Which services you get from Meraki UI',
          blogDescription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore',
          avatar:
            'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
          authorName: 'Amelia Anderson',
          authorJob: 'Creative Director',
        },
      ],
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
          <Card v-for="blog in blogs" :blog="blog" />
        </div>
      </div>
    </section>
  </main>
</template>
