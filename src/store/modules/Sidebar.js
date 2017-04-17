'use strict';
import * as types from '../mutation_types';
const state     = {
	navLinks: []
};
const getters   = {
	navigationLinks: state => state.navLinks
};
const actions   = {
	setLinks({commit}, links){
		commit(types.SET_NAV_LINKS, links)
	}
};
const mutations = {
	[types.SET_NAV_LINKS](state, {navLinks}){
		state.navLinks = navLinks;
	}
};
export default {
	state,
	getters,
	actions,
	mutations
}
