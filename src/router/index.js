import {createRouter, createWebHistory} from 'vue-router';
// Import pages
import HomePage from '../pages/HomePage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';

// Create Router
const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        {path: '/', name: 'home', component: HomePage},
        {path: '/project/:id', name: 'project-detail', component: ProjectDetailPage},
        {path: '/:pathMatch(.*)*', redirect: '/'},
    ]
});

export { router }