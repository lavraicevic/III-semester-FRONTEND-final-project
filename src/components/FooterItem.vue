<script>
</script>

<template>
    <p class="text-sm text-gray-600 transition-colors duration-300  hover:text-blue-500">
        <RouterLink to="/not-exist">
            <slot/>
        </RouterLink>
    </p>
</template>