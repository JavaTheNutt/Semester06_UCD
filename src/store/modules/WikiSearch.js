'use strict';
import * as types from '../mutation_types';
import _ from 'lodash';

const state   = {
    articles: [],
    showArticles: false
};
const actions = {
    retrieveArticles({commit, searchTerm}){
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
                    commit(types.SET_ARTICLE_LIST, {list});
                    resolve();
                })
        });

    },
    showArticles({commit}, showArticles){
        commit(types.SET_SHOW_ARTICLES, {showArticles})
    }
};
const mutations = {
    [types.SET_SHOW_ARTICLES](state, {showArticles}){
        state.showArticles = showArticles;
    },
    [types.SET_ARTICLE_LIST](state, {list}){
        state.articles = convertResult(list);
    }
};

export default {
    state,
    actions,
    mutations
};




function convertResult(results) {
    return _.map(results).map((result) => {
        console.log('current result:', result);
        return _.assign(result, {
            title: convertText(result.title),
            snippet: convertText(result.snippet)
        })
    })
}

function convertText(text) {
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

