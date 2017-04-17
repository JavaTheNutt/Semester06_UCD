import Vue from 'vue';
import Vuex from 'vuex';
import jsonp from 'jsonp';
import _ from 'lodash';
import wikiSearch from './modules/WikiSearch'
import toggleConstruction from './modules/ToggleConstruction';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules:{
		wikiSearch,
		toggleConstruction
	}
    /*state: {
        articles: [],
        showArticles: false,
        showUnderConstruction: true
    },*/
    /*actions: {
        RETRIEVE_ARTICLES: function ({commit}, searchTerm) {
            console.log('retrieving data for: ', searchTerm);

            return new Promise((resolve, reject) => {
                jsonp(
                    'https://en.wikipedia.org/w/api.php?action=query&srsearch=' + searchTerm + '&list=search&format=json',
                    (err, data) => {
                        'use strict';
                        if (err) {
                            console.log(err);
                            reject(err);
                            return;
                        }
                        console.log('data retrieved', data.query.search);
                        const list = _.map(data.query.search, (article) => {
                            return {
                                url: 'https://en.wikipedia.org/wiki/' + article.title,
                                title: article.title,
                                snippet: article.snippet
                            }
                        });
                        console.log('current list:', list);
                        commit('SET_ARTICLE_LIST', {list});
                        resolve();
                    })
            });

        },
        SHOW_ARTICLES: ({commit}, showArticles) => {
            //'use strict';
            commit('SET_SHOW_ARTICLES', {showArticles});
        },
        HIDE_CONSTRUCTION:({commit}) =>{
            //'use strict';
            commit('SET_SHOW_CONSTRUCTION', false);
        }
    },
    mutations: {
        SET_SHOW_ARTICLES: (state, {showArticles}) => {
            //'use strict';
            state.showArticles = showArticles;
        },
        SET_ARTICLE_LIST: (state, {list}) => {
            //'use strict';
            state.articles = convertResult(list);
            console.log('articles changed to:', state.articles);
        },
        SET_SHOW_CONSTRUCTION: (state, {showConstruction}) => {
            state.showUnderConstruction = showConstruction;
        }
    },
    getters: {}*/
});
export default store;
function convertResult(results) {
    'use strict';
    return _.map(results).map((result) => {
        console.log('current result:', result);
        return _.assign(result, {
            title: convertText(result.title),
            snippet: convertText(result.snippet)
        })
    })
}

function convertText(text) {
    'use strict';
    console.log('converting:', text);
    const textArea     = document.createElement("textarea");
    textArea.innerHTML = text;
    let str            = textArea.value;
    console.log('string to be transformed:', str);
    str = str.replace(/<span class="searchmatch">/g, '');
    console.log('removed opening tag:', str);
    str = str.replace(/<\/span>/g, '');
    console.log('removed closing tag:', str);
    return str;
}
