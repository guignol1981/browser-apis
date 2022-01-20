import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

export enum NomRoutes {
    PageVisibilityAPI = 'page-visibility-api',
    ConsoleAPI = 'console-api',
    FullscreenAPI = 'fullscreen-api',
    WebPeriodicBackgroundSynchronizationAPI = 'wpbs-api',
    WebShareAPI = 'web-share-api',
    ScreenOrientationApi = 'screen-orientation-api',
    BarcodeDetectionApi = 'barcode-detection-api',
    BroadcastChannelApi = 'broadcast-channel-api',
    PictureInPictureApi = 'pip-api',
    ResizeObserverApi = 'resize-observer-api',
    GeolocationApi = 'geolocation-api',
    WebSpeechApi = 'web-speech-api',
    ExerciceApi = 'exercice-api',
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
    {
        path: '/console-api',
        name: NomRoutes.ConsoleAPI,
        component: () =>
            import(
                /* webpackChunkName: "console-api" */ '../views/ConsoleApi.vue'
            ),
    },
    {
        path: '/fullscreen-api',
        name: NomRoutes.FullscreenAPI,
        component: () =>
            import(
                /* webpackChunkName: "fullscreen-api" */ '../views/FullscreenApi.vue'
            ),
    },
    {
        path: '/web-periodic-background-synchronization-api',
        name: NomRoutes.WebPeriodicBackgroundSynchronizationAPI,
        component: () =>
            import(
                /* webpackChunkName: "/web-periodic-background-synchronization-api" */ '../views/WebPeriodicBackgroundSynchronizationAPI.vue'
            ),
    },
    {
        path: '/web-share-api',
        name: NomRoutes.WebShareAPI,
        component: () =>
            import(
                /* webpackChunkName: "/web-share-api" */ '../views/WebShareApi.vue'
            ),
    },
    {
        path: '/screen-orientation-api',
        name: NomRoutes.ScreenOrientationApi,
        component: () =>
            import(
                /* webpackChunkName: "/screen-orientation-api" */ '../views/ScreenOrientationApi.vue'
            ),
    },
    {
        path: '/barcode-detection-api',
        name: NomRoutes.BarcodeDetectionApi,
        component: () =>
            import(
                /* webpackChunkName: "/barcode-detection-api" */ '../views/BarcodeDetectionApi.vue'
            ),
    },
    {
        path: '/broadcast-channel-api',
        name: NomRoutes.BroadcastChannelApi,
        component: () =>
            import(
                /* webpackChunkName: "/broadcast-channel-api" */ '../views/BroadcastChannelApi.vue'
            ),
    },
    {
        path: '/pip-api',
        name: NomRoutes.PictureInPictureApi,
        component: () =>
            import(
                /* webpackChunkName: "/pip-api" */ '../views/PictureInPictureApi.vue'
            ),
    },
    {
        path: '/resize-observer-api',
        name: NomRoutes.ResizeObserverApi,
        component: () =>
            import(
                /* webpackChunkName: "/resize-observer-api" */ '../views/ResizeObserverApi.vue'
            ),
    },
    {
        path: '/geolocation-api',
        name: NomRoutes.GeolocationApi,
        component: () =>
            import(
                /* webpackChunkName: "/geolocation-api" */ '../views/GeolocationApi.vue'
            ),
    },
    {
        path: '/web-speech-api',
        name: NomRoutes.WebSpeechApi,
        component: () =>
            import(
                /* webpackChunkName: "/web-speech-api" */ '../views/WebSpeechApi.vue'
            ),
    },
    {
        path: '/exercice-api',
        name: NomRoutes.ExerciceApi,
        component: () =>
            import(
                /* webpackChunkName: "/exercice-api" */ '../views/Exercice.vue'
            ),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
