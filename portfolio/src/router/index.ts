import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';
import About from '../views/About.vue'
import Dashboard from '@/views/Dashboard.vue';
import ProjectFrame from '@/views/ProjectFrame.vue';
import Impressum from '@/views/Impressum.vue';
import Frame from "@/views/Frame.vue";
import Home from "@/views/Home.vue";

const routes = [
    { path: '/', name:"Dashboard", component:  Dashboard},
    { path: '/about', component: About},
    { path: '/projectFrame/:id', component: ProjectFrame },
    { path: '/impresum', component: Impressum },
    { path: '/Home', component: Home },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;