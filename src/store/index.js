import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        phone_num: '',
        new_phone: ''
    },
    mutations: {
        phone_num (state, res) {
            state.phone_num = res;
        },
        new_phone (state, res) {
            console.log(res);
            state.new_phone = res;
        }
    }
});
