<template>
  <div class="font-sans text-gray-800 bg-white min-h-screen">
    <!-- Navigation -->
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
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-b border-gray-100">
        <div class="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a v-for="(item, index) in navItems" :key="index" :href="item.href" 
             class="text-gray-600 hover:text-black transition-colors py-2 text-sm font-medium"
             @click="mobileMenuOpen = false">
            {{ item.label }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-32 pb-20 md:pt-40 md:pb-32">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-light mb-6 leading-tight">
            Hello, I'm <span class="font-medium">Gagas</span>.<br />
            I design & build digital products.
          </h1>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            Web developer and Mobile developer focused on creating clean, user-friendly experiences.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#contact" class="px-6 py-3 bg-black text-white rounded-none hover:bg-gray-900 transition-colors">
              Get in Touch
            </a>
            <a href="#projects" class="px-6 py-3 border border-gray-200 text-gray-800 rounded-none hover:bg-gray-50 transition-colors">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
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
              <div v-for="(tech, index) in technologies" :key="index" 
                   class="flex items-center">
                <component :is="tech.icon" class="w-5 h-5 text-gray-700 mr-3 flex-shrink-0" />
                <span class="text-gray-700">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
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
                View Project <arrow-right-icon class="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-50 border-t border-gray-100">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold mb-10">Get in Touch</h2>
          
          <div class="grid grid-cols-1 gap-12">
            <div>
              <p class="text-gray-600 mb-6">
                Have a project in mind or just want to chat? Feel free to reach out.
              </p>
              
              <div class="space-y-4">
                <div v-for="(contact, index) in contactInfo" :key="index" class="flex items-start">
                  <component :is="contact.icon" class="w-5 h-5 text-gray-700 mt-0.5 mr-3" />
                  <span class="text-gray-700">{{ contact.value }}</span>
                </div>
              </div>
              
              <div class="mt-8">
                <h4 class="text-sm uppercase tracking-wider text-gray-500 mb-4">Connect</h4>
                <div class="flex space-x-4">
                  <a v-for="(social, index) in socialLinks" :key="index" :href="social.link" 
                     class="text-gray-600 hover:text-black transition-colors">
                    <component :is="social.icon" class="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 border-t border-gray-100">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-gray-500">&copy; {{ new Date().getFullYear() }} Gagas Sangga Pratama</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a v-for="(item, index) in navItems" :key="index" :href="item.href" 
               class="text-sm text-gray-500 hover:text-gray-800 transition-colors">
              {{ item.label }}
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { 
  Menu as MenuIcon, 
  X as XIcon, 
  Mail as MailIcon, 
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Github as GithubIcon,
  Twitter as TwitterIcon,
  Linkedin as LinkedinIcon,
  ArrowRight as ArrowRightIcon,
  Code as CodeIcon,
  FileCode as FileCodeIcon,
  Figma as FigmaIcon,
  Terminal as TerminalIcon,
  GitBranch as GitBranchIcon,
  Package as PackageIcon,
  Smartphone as SmartphoneIcon,
  Database as DatabaseIcon,
  Server as ServerIcon,
  Globe as GlobeIcon,
  Cloud as CloudIcon,
  Layout as LayoutIcon,
  Palette as PaletteIcon,
  Layers as LayersIcon
} from 'lucide-vue-next';

// Navigation
const mobileMenuOpen = ref(false);
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

// Technologies - limited to 15 (3 columns x 5 rows)
const technologies = [
  { name: 'Laravel', icon: FileCodeIcon },
  { name: 'CodeIgniter', icon: FileCodeIcon },
  { name: 'Bootstrap', icon: LayoutIcon },
  { name: 'JavaScript', icon: CodeIcon },
  { name: 'Vue.js', icon: LayersIcon },
  { name: 'Flutter', icon: CodeIcon },
  { name: 'JQuery', icon: PaletteIcon },
  { name: 'Git', icon: GitBranchIcon },
  { name: 'REST API', icon: GlobeIcon },
  { name: 'Firebase', icon: CloudIcon },
  { name: 'MySQL', icon: DatabaseIcon },
  { name: 'Cloudflare', icon: CloudIcon }
];

// Projects
const projects = [
  {
    title: 'Pakai Email',
    description: 'A robust and privacy-focused email hosting platform designed for reliability and ease of use. Features include custom domain email setup, spam protection, webmail access, and seamless integration with popular email clients.',
    technologies: ['CodeIgniter', 'Bootstrap', 'Tripay API'],
    liveLink: '#'
  },
  {
    title: 'Kita Nikahin',
    description: 'A modern digital wedding invitation platform that allows couples to share event details with guests effortlessly. Features include RSVP tracking, interactive maps, photo galleries, and customizable themes for a personal touch.',
    technologies: ['CodeIgniter', 'Bootstrap', 'Tripay API'],
    liveLink: '#'
  },
  {
    title: 'My Dentmate',
    description: 'A dental clinic platform enabling patients to easily book appointments and access online consultations. Features include real-time scheduling, patient history tracking, secure chat with dentists, and automated reminders to streamline dental care.',
    technologies: ['Flutter', 'Firebase', 'SocketIO'],
    liveLink: '#'
  },
  {
    title: 'Papais CCTV',
    description: 'A real-time CCTV monitoring platform offering secure live streaming from multiple cameras. Designed for accessibility and performance, it includes remote access via web or mobile, multi-camera views, motion alerts, and cloud-based video storage.',
    technologies: ['Flutter', 'Firebase', 'Maps API'],
    liveLink: '#'
  }
];

// Contact Info
const contactInfo = [
  { icon: MailIcon, value: 'hello@gagas.web.id' },
  { icon: PhoneIcon, value: '+62 895-8062-85900' },
  { icon: MapPinIcon, value: 'Pemalang, Jawa Tengah, Indonesia' }
];

// Social Links
const socialLinks = [
  { icon: GithubIcon, link: 'https://github.com/haiigas' },
  { icon: LinkedinIcon, link: 'https://linkedin.com/in/haiigas' }
];
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>