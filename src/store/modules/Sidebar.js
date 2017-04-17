'use strict';
import * as types from '../mutation_types';
const state     = {
	navLinks: [],
	sidebarShown: false
};
const getters   = {
	navigationLinks: state => state.navLinks,
	sidebarShown: state => state.sidebarShown
};
const actions   = {
	setLinks({commit}, links){
		console.log('setting links. number of links: ' + links.length);
		commit(types.SET_NAV_LINKS, links);
		commit(types.SET_SIDEBAR_SHOWN, links !== null);
	},
	showSidebar({commit}){
		commit(types.SET_SIDEBAR_SHOWN, true);
	},
	hideSidebar({commit}){
		commit(types.SET_SIDEBAR_SHOWN, false);
	}
};
const mutations = {
	[types.SET_NAV_LINKS](state, {navLinks}){
		state.navLinks = navLinks;
	},
	[types.SET_SIDEBAR_SHOWN](state, {sidebarShown}){
		state.sidebarShown = sidebarShown;
	}
};
export default {
	state,
	getters,
	actions,
	mutations
}
