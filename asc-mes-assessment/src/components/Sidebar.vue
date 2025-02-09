<script setup>

</script>

<template>
    <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-purple-700">
            <div class="p-4">
                <img src="../assets/MES_logo.svg" class="self-center w-24 h-24">
            </div>
            <nav class="space-y-2 font-medium">
                <RouterLink to="/" class="flex items-center p-2 text-purple-100 rounded-lg hover:bg-pink-500 group" exact-active-class="bg-pink-500">Dashboard</RouterLink>
                <RouterLink to="/production-tracking" class="flex items-center p-2 text-purple-100 rounded-lg hover:bg-pink-500 group" exact-active-class="bg-pink-500">Production Tracking</RouterLink>
                <RouterLink to="/quality-control" class="flex items-center p-2 text-purple-100 rounded-lg hover:bg-pink-500 group" exact-active-class="bg-pink-500">Quality Control</RouterLink>
            </nav>
        </div>
    </aside>
</template>