/**
 * This is the main file. It is responsible for rendering the App component, which is the root component
 */
import Vue from 'vue'
import App from './App.vue';
import router from './routes'

const app = new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
