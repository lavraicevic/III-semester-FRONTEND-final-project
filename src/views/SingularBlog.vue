<script>
import { useBlogStore } from '@/stores/blogs'

export default {
  data() {
    return {
      blog: null,
      commentName: '',
      commentContent: ''
    }
  },
  methods:{
    createComment(){
      if(this.commentName === '' || this.commentContent === ''){
        alert('Fill in all the comment info')
        return
      }
      this.blog.comments.push({
        name: this.commentName,
        content: this.commentContent,
        avatar: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png'
      })
      this.commentName = ''
      this.commentContent = ''
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
    class="mx-auto my-10 py-5 w-1/2 grid place-content-center "
  >
    
    <div v-if="blog" class="rounded-xl border border-indigo-300 text-center">
      <!-- Title and subtitle -->
      <h1 class="text-3xl font-bold mb-2">{{ blog.title }}</h1>
      <p class="text-neutral-500 mb-5">{{ blog.body }}</p>

      <!-- Image and description -->
      <div class="w-full px-10">
        <img :src="blog.image" alt="" class="border border-gray-300 rounded-xl mb-4" />
        <p class="text-lg text-neutral-800 text-justify">{{ blog.description }}</p>
      </div>
      
    </div>
    <!-- Comments -->
    <div class="mt-4 border border-neutral-400 rounded-lg px-8 py-4">
      <h2 class="text-xl font-semibold my-2">Comments: {{ blog.comments.length }}</h2>

      <div v-for="comment in blog.comments" class="my-2 px-6 py-3 border border-neutral-500 rounded-xl">
        <div class="flex gap-3 items-center mb-2">
          <img :src="comment.avatar" alt="profile pic" class="size-10 border border-neutral-400 rounded-full">
          <p class="text-xl font-semibold">{{ comment.name }}</p>
        </div>
        <p>{{ comment.content }}</p>
      </div>
      <br>
      <hr>
      <!-- Creating comments -->
      <form class="mt-2" @submit.prevent="createComment">
        <h3 class="text-lg italic mb-1">Create your comment:</h3>
        <label>Name:
          <input type="text" class="border rounded-md mb-2" v-model="commentName" placeholder="Enter your name">
        </label>
        <br> 
        <label class="flex gap-2">
          Comment: <textarea name="comment" v-model="commentContent" class="border w-150 h-30 rounded-md" placeholder="Type the comment..."></textarea> 
        </label>
        <button class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 cursor-pointer" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>
