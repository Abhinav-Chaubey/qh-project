import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue';
import Parent from '../components/Parent.vue';
import store from '../store';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {path: '/login', name:'Login', component: Login},
        {path: '/', name:'Parent', component: Parent},
    ]
})
router.beforeEach((to, from, next) => {
    console.log(to, from, next);
    if (to.path !== '/login' && !store.state.isAuthUser) {
        next('/login');
    } else {
        next();
    }
});

export default router;