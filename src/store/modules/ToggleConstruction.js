'use strict';
import * as types from '../mutation_types';
const state     = {
	showUnderConstruction: true
};
const getters   = {
	showConstruction: state => state.showUnderConstruction
};
const actions   = {
	hideConstruction({commit}){
		commit(types.SET_SHOW_CONSTRUCTION, false);
	}
};
const mutations = {
	[types.SET_SHOW_CONSTRUCTION](state, {showConstruction}){
		state.showUnderConstruction = showConstruction;
	}
};
export default {
	state,
	getters,
	actions,
	mutations
}
