<template>
  <div class="font-sans text-gray-800 bg-white min-h-screen">
    <Navbar :navItems="navItems" />
    <Hero />
    <About :technologies="technologies" />
    <Projects :projects="projects" />
    <Contact :contactInfo="contactInfo" :socialLinks="socialLinks" />
    <Footer :navItems="navItems" />
  </div>
</template>

<script setup>
import { navItems, technologies, projects, contactInfo, socialLinks } from './data/master.js';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
