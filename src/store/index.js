import Vue from 'vue';
import Vuex from 'vuex';
import wikiSearch from './modules/WikiSearch';
import toggleConstruction from './modules/ToggleConstruction';
import sidebar from './modules/Sidebar';

Vue.use(Vuex);

const store = new Vuex.Store({
	                             modules: {
		                             wikiSearch,
		                             toggleConstruction,
		                             sidebar
	                             }
                             });
export default store;
