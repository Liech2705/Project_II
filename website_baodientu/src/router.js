import { createRouter, createWebHistory } from 'vue-router';


import appSidebar from './components/appSidebar.vue';
import Catelogy_Page from './pages/Catelogy_Page.vue';
import Account_Manager from './pages/Account_Page.vue';
import Newspaper_Manager from './pages/News_Pages.vue';
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
            name: 'account_manager',
            component: Account_Manager,
        },
        {
            path: '/newspaperPages',
            name: 'newspaper_manager',
            component: Newspaper_Manager,
        }
        ],
    },
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;