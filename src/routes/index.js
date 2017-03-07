import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';

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
        path: '/foo',
        name: 'foo',
        component: test01
    },
    {
        path: '/bar',
        name: 'bar',
        component: test02
    }
];
export default new Router({
    routes
})
