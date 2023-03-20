import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        searchlists:[],
    },
    mutations:{
        getsearch(state,data){
            state.searchlists = data
            // console.log(state.searchlists);
        },
    },
    actions:{
        
    }
})