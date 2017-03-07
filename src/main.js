import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';


Vue.use(VueRouter);
const test01 = {template: '<div>foo</div>'};
const test02 = {template: '<div>bar</div>'};
const routes = [
    {path: '/foo', component: test01},
    {path: '/bar', component: test02}
];
const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
