import {
    FileCode,
    Layout,
    Code,
    Layers,
    Palette,
    GitBranch,
    Globe,
    Cloud,
    Database,
} from 'lucide-vue-next';

export const technologies = [
    { name: 'Laravel', icon: FileCode },
    { name: 'CodeIgniter', icon: FileCode },
    { name: 'Bootstrap', icon: Layout },
    { name: 'JavaScript', icon: Code },
    { name: 'Vue.js', icon: Layers },
    { name: 'Flutter', icon: Code },
    { name: 'JQuery', icon: Palette },
    { name: 'Git', icon: GitBranch },
    { name: 'REST API', icon: Globe },
    { name: 'Firebase', icon: Cloud },
    { name: 'MySQL', icon: Database },
    { name: 'Cloudflare', icon: Cloud }
];

export const projects = [
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