import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import References from '../components/References.vue';

Vue.use(Router);

const routes = [{
	path: '/',
	name: 'home',
	component: Home
}, {
	path: '/references',
	name: 'references',
	component: References
}];
export default new Router({
	routes,
	activeClass: 'active'
})
