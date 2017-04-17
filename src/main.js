/**
 * This is the main file. It is responsible for rendering the App component, which is the root component
 */
import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import Logger from './service/Logger';

require('vue-animate/dist/vue-animate.min.css');
require('./vendor');

Vue.use(Logger);

const app = new Vue({
	router,
	store,
	el: '#app',
	render: h => h(App)
});
