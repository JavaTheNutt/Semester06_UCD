import * as types from '../mutation_types';
const state = {
    showUnderConstruction: true
};
const actions = {
    hideConstruction({commit}){
        'use strict';
        commit(types.SET_SHOW_CONSTRUCTION);
    }
};
const mutations = {
    [types.SET_SHOW_CONSTRUCTION](state, {showConstruction}){
        'use strict';
        state.showUnderConstruction = showConstruction;
    }
};
export default {
    state,
    actions,
    mutations
}
