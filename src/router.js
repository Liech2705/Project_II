import { createRouter, createWebHistory } from 'vue-router';


import appSidebar from './components/appSidebar.vue';
import Catelogy_Page from './components/Catelogy_Page.vue';
import Account_Manager from './components/Account_Page.vue';
import Account_Banner from './components/Banner_Page.vue';
// Define your routes
const routes = [
    {
        path: '/',
        name: 'sidebar',
        component: appSidebar,
        children : [ {
            path: '/catelogyPages',
            name: 'catelogy',
            component: Catelogy_Page,
        },
        {
            path: '/accountPages',
            name: 'accountmanager',
            /* eslint-disable vue/multi-word-component-names */
            component: Account_Manager,
        },
        {
            path: '/bannerPages',
            name: 'accountbanner',
            /* eslint-disable vue/multi-word-component-names */
            component: Account_Banner,
        },
        ],
    },
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;