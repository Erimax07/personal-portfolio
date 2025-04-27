import { createRouter, createMemoryHistory } from 'vue-router';
import About from '../views/About.vue'
import Dashboard from '@/views/Dashboard.vue';
import ProjectFrame from '@/views/ProjectFrame.vue';

const routes = [
    { path: '/', component:  Dashboard},
    { path: '/about', component: About },
    { path: '/projectFrame', component: ProjectFrame },
  ]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;