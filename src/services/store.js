import Vuex from 'vuex'
import Vue from 'vue'
// import { keys } from 'core-js/fn/array';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin: false,
        token:null,
        user:null,
    },
    mutations: {
        resetState (state) {
            state.isLogin=false;
            state.token=null;
            state.user=null;
        }
    },
    actions: {
        clearState ({ commit }) {
            commit('resetState');
        },
    }
});
// const state = { token: null }
// const mutations = {
//     LOGIN_SUCCESS(state, response) {
//         state.token = response.token
//     }
// }

// export default {
//     state,
//     mutations
// }

// export default new Vuex.Store({
//     state: {
//         token: localStorage.getItem('token') || ''
//     },
//     mutations: {
//         setToken (state,token){
//             localStorage.setItem('token',token)
//             state.token = token
//         },
//         clearToken(state){
//             localStorage.removeItem('token')
//             state.token = ' '
//         }
//     }
// })