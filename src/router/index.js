import {createRouter, createWebHistory} from 'vue-router';
// Import pages
import App from '../App.vue';

// Create Router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: App}
    ]
});