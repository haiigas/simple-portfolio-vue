<template>
    <section id="about" class="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-2xl font-bold mb-10">About</h2>
                <div class="space-y-6 text-gray-700">
                    <p>
                        I'm a software development professional with hands-on experience in leading cross-functional teams
                        and delivering high-impact projects.
                    </p>
                    <p>
                        My strengths lie in building clean and efficient software architectures, optimizing performance,
                        and fostering effective communication between technical teams and stakeholders. 
                    </p>
                    <p>
                        I'm passionate about building reliable digital solutions—ranging from web applications with PHP to
                        mobile apps using Flutter for both Android and iOS. I also specialize in API integration and long-term
                        app maintenance for stability and growth.
                    </p>
                </div>
                <div class="mt-16">
                    <h3 class="text-xl font-bold mb-8">Technologies</h3>
                    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                        <div v-for="(tech, index) in technologies" :key="index" class="flex items-center">
                            <component :is="tech.icon" class="w-5 h-5 text-gray-700 mr-3 flex-shrink-0" />
                            <span class="text-gray-700">{{ tech.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    technologies: Array
});
</script>
