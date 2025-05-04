<template>
    <nav class="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div class="container max-w-4xl mx-auto px-6 md:px-0 py-4 flex justify-between items-center">
            <div class="hidden md:flex space-x-8">
                <a v-for="(item, index) in navItems" :key="index" :href="item.href" 
                    class="text-gray-600 hover:text-black transition-colors text-sm font-medium">
                {{ item.label }}
                </a>
            </div>
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-gray-600">
                <menu-icon v-if="!mobileMenuOpen" class="w-6 h-6" />
                <x-icon v-else class="w-6 h-6" />
            </button>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
const mobileMenuOpen = ref(false);

defineProps({
    navItems: Array
});
</script>
