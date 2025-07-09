<script>
export default{
    props:{
        blog:{
            type: Object,
            required: true
        } 
    }
}
</script>

<template>
    <div>
        <div class="relative">
            <!-- Blog image -->
            <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" :src="blog.BlogImage" alt="Blog image">
            <!-- Author name, job and Avatar -->
            <div class="absolute bottom-0 flex p-3 bg-white ">
                <img class="object-cover object-center w-10 h-10 rounded-full" :src="blog.avatar" alt="Avatar">

                <div class="mx-4">
                    <h1 class="text-sm text-gray-700">{{blog.authorName}}</h1>
                    <p class="text-sm text-gray-500">{{blog.authorJob}}</p>
                </div>
            </div>
        </div>

        <h1 class="mt-6 text-xl font-semibold text-gray-800 ">
            {{blog.blogTitle}}
        </h1>

        <hr class="w-32 my-6 text-blue-500">

        <p class="text-sm text-gray-500">
            {{blog.blogDescription}}
        </p>

        <a href="#" class="inline-block mt-4 text-blue-500 underline hover:text-blue-400">Read more</a>
    </div>
</template>