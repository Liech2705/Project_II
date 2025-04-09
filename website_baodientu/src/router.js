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
            meta: { title: 'Quản lý danh mục'},
            component: Catelogy_Page,
        },
        {
            path: '/accountPages',
            name: 'account_manager',
            meta: { title: 'Quản lý tài khoản'},
            component: Account_Manager,
        },
        {
            path: '/newspaperPages',
            name: 'newspaper_manager',
            meta: { title: 'Quản lý bài viết'},
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