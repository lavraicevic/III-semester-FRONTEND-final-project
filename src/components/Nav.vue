<script>
import NavItem from '@/components/NavItem.vue'
export default {
  components: {
    NavItem,
  },
}
</script>
<template>
  <header>
    <nav class="w-full bg-white shadow fixed top-0">
      <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize">
        <img src="../assets/logo.svg" alt="logo" class="size-8 mr-5" />
        {{}}
        <NavItem :class="$route.name === 'home' ? 'border-indigo-500' : 'border-transparent'">
          <RouterLink to="/">Home</RouterLink>
        </NavItem>

        <NavItem :class="$route.name === 'blogs' ? 'border-indigo-500' : 'border-transparent'">
          <RouterLink to="/blogs">Blogs</RouterLink>
        </NavItem>

        <NavItem :class="$route.name === 'authors' ? 'border-indigo-500' : 'border-transparent'">
          <RouterLink to="/authors">Authors</RouterLink>
        </NavItem>
      </div>
    </nav>
  </header>
</template>
