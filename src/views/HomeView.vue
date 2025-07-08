<script>
import Card from '../components/Card.vue'

export default{
  components:{
    Card
  }
}
</script>

<template>
  <main class="mx-auto w-3/4 mt-10 pt-20">
    <!-- Landing paragraph -->
    <section class="bg-blue-100 rounded-lg lg:grid lg:h-150 lg:place-content-center lg:rounded-xl">
      <div class="mx-auto w-screen max-w-screen-xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div class="max-w-prose text-left">
          <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
            Welcome to the <span class="uppercase text-indigo-600">blog</span>
          </h1>

          <p class="mt-4 text-base text-pretty text-gray-700 sm:text-xl/relaxed">
            Explore articles, insights, and ideas across topics that matter. <br />
            Dive in, discover something new, and join the conversation.
          </p>
        </div>
      </div>
    </section>

    <!-- Description -->
    <section class="mt-4">
      <!-- Heading -->
      <div class="flex items-center">
        <span class="h-[2px] flex-1 bg-indigo-600"></span>

        <span class="text-2xl font-semibold px-8 text-indigo-600">Discover, Read, Explore</span>

        <span class="h-[2px] flex-1 bg-indigo-600"></span>
      </div>

      <!-- Paragraph -->
      <section class="bg-white rounded-xl shadow-md px-6 py-10 mx-auto mt-8">
        <p class="text-gray-800 text-lg leading-relaxed tracking-wide space-y-4">
          <span class="block">
            This blog is all about sharing stories, exploring ideas, and starting meaningful
            conversations. It’s a space built on curiosity, creativity, and the simple joy of
            putting thoughts into words.
          </span>
          <span class="block">
            We write about what inspires us - and hopefully, what inspires you too. Some posts might
            spark new ideas, others might just offer a moment of reflection or a fresh way of
            looking at something familiar. Whether it's a deep-dive into a topic, a personal
            insight, or just a quick thought worth sharing, we put care into every word.
          </span>
          <span class="block">
            You don’t need to rush. Scroll through, pick what speaks to you, and take it in at your
            own pace.
          </span>
          <span class="block">
            Whether you’re here to learn, reflect, or just relax, we’re glad you stopped by. Make
            yourself at home - and if you like what you read, don’t be a stranger.
          </span>
        </p>
      </section>
    </section>

    <!-- Section with cards -->
    <section class="bg-white w-full">
      <!-- Header for the section -->
      <div class="container px-6 py-10 mx-auto">
        <div class="mt-6 md:flex md:items-center md:justify-center">
          <div>
            <h1
              class="pb-3 px-4 text-2xl font-semibold text-gray-800 capitalize border-b-3 border-b-indigo-600 lg:text-3xl"
            >
              Available features
            </h1>
          </div>
        </div>
      </div>

      <!-- Cards -->
        <div
          class="mb-8 w-full mx-auto flex items-center justify-between"
        >
          <Card>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus
              libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus
              assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
          </Card>

          <Card>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus
              libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus
              assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
          </Card>

          <Card>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus
              libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus
              assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
          </Card>

        </div>
    </section>

    <!-- Banner -->
    <section class="mb-8 bg-gray-900 rounded-xl lg:grid lg:place-content-center">
      <div class="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div class="max-w-prose">
          <h1 class="text-4xl font-bold text-white sm:text-5xl">
            Understand user flow and
            <strong class="text-indigo-600"> increase </strong>
            conversions
          </h1>

          <p class="mt-4 text-base text-pretty text-gray-200 sm:text-lg/relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
            accusamus impedit minima harum corporis iusto.
          </p>

          <!-- Email form -->
          <form class="mt-5">
            <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">Email Address</label>

            <input type="email" placeholder="john@example.com" class="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

            <button class="mt-4 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Submit
            </button>
          </form>
        </div>
      </div>
      
    </section>

  </main>
</template>
