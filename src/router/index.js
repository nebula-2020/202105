import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router';

const Home = () => import('views/HomePage.vue');
const SignIn = () => import('views/SignIn.vue');
const SignUp = () => import('views/SignUp.vue');
Vue.use(Router);

const routes = [
    {
        path: '',
        redirect: '/index',
    },
    {
        path: '/index',
        component: Home,
    },
    {
        path: '/signIn',
        component: SignIn,
    },
    {
        path: '/signUp',
        component: SignUp,
    },
];
const router = new VueRouter({
    routes,
    mode: 'history',
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};
export default router;
