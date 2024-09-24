import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Users from '@/views/Users.vue';
import Todos from '@/views/Todos.vue'; // Новая страница

const routes = [
    { path: '/', component: Home },
    { path: '/users', component: Users },
    { path: '/todos', component: Todos }, // Новый маршрут
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
