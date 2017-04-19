/**
 * This is the main file. It is responsible for rendering the App component, which is the root component
 */
import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import Logger from './service/Logger';
import MediaQuery from 'v-media-query';

require('vue-animate/dist/vue-animate.min.css');
require('./vendor');

Vue.use(Logger);
Vue.use(MediaQuery, {
	variables: {
		sm: '768px',
		md: '992px',
		lg: '1200px'
	}
});

const app = new Vue({
	router,
	store,
	el: '#app',
	render: h => h(App)
});
