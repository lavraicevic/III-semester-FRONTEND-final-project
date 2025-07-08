<script>
import NavItem from '@/components/NavItem.vue'
export default{
  components:{
    NavItem
  }
}
</script>
<template>
  <header>
    <nav class="w-full bg-white shadow fixed top-0">
      <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize">
        <img src="../assets/logo.svg" alt="logo" class="size-8 mr-5">

        <NavItem>
          <RouterLink
            to="/"
            >Home</RouterLink
          >
        </NavItem>

        <NavItem>
          <RouterLink
            to="/not-exist"
            >Blogs</RouterLink
          >
        </NavItem>

        <NavItem>
          <RouterLink
            to="/not-exist"
            >Authors</RouterLink
          >
        </NavItem>
      </div>
    </nav>
  </header>
</template>
