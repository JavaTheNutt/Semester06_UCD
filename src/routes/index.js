import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import References from '../components/References.vue';
import InternetBeginning from '../components/InternetBeginning.vue';
import DarpaNet from '../components/DarpaNet.vue';
import WWWBeginning from '../components/WWWBeginning.vue';
import HtmlHttp from '../components/HtmlHttp.vue';

Vue.use(Router);

const routes = [{
	path: '/',
	name: 'home',
	component: Home
}, {
	path: '/references',
	name: 'references',
	component: References
}, {
	path: '/internet/beginning',
	name: 'internet_beginning',
	component: InternetBeginning
}, {
	path: '/internet/darpa_net',
	name: 'darpa_net',
	component: DarpaNet
},{
	path: '/www/beginning',
	name: 'www_beginning',
	component: WWWBeginning
}, {
	path: '/www/html_http',
	name: 'html_http',
	component: HtmlHttp
}];

export default new Router({
	routes,
	activeClass: 'active'
})
