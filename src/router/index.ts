import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

export enum NomRoutes {
    PageVisibilityAPI = 'page-visibility-api',
}

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/page-visibility-api',
        name: NomRoutes.PageVisibilityAPI,
        component: () =>
            import(
                /* webpackChunkName: "page-visibility-api" */ '../views/PageVisibilityApi.vue'
            ),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
