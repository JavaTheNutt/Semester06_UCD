import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import References from '../components/References.vue'

Vue.use(Router);

const test01 = {template: '<div>This is the Foo page</div>'};
const test02 = {template: '<div>This is the Bar page</div>'};

const routes = [
    {
        path:'/',
        name: 'home',
        component: Home
    },
    {
        path: '/references',
        name: 'references',
        component: References
    },
    {
        path: '/bar',
        name: 'bar',
        component: test02
    }
];
export default new Router({
    routes,
    activeClass: 'active'
})
