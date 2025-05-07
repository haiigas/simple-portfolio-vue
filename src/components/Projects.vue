<template>
    <section id="projects" class="py-20">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-2xl font-bold mb-10">Latest Projects</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="(project, index) in projects" :key="index" 
                            class="border border-gray-100 p-6 hover:shadow-sm transition-shadow">
                        <h3 class="text-xl font-medium mb-2">{{ project.title }}</h3>
                        <p class="text-gray-600 mb-4 text-sm">{{ project.description }}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span v-for="(tech, techIndex) in project.technologies" :key="techIndex" 
                                    class="px-3 py-1 bg-gray-100 text-gray-700 text-xs">
                                {{ tech }}
                            </span>
                        </div>
                        <a :href="project.liveLink" class="text-sm font-medium hover:underline flex items-center mt-2">
                            View Project <ArrowRight class="w-4 h-4 ml-1" />
                        </a>
                    </div>
                </div>

                <!-- Show All Button (left aligned) -->
                <div class="mt-10">
                    <a href="https://portfolio.gagas.web.id" class="text-sm font-medium flex items-center hover:underline">
                        Show All Projects <ArrowRight class="w-4 h-4 ml-1" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next';

defineProps({
    projects: Array
});
</script>
