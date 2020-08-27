//index.js is an entry point to vuex - to combine all modules

import Vuex from "vuex";
import Vue from "vue";
import todos from "./modules/todos";

//load Vuex
Vue.use(Vuex)

//create store
export default new Vuex.Store({
    modules: {
        todos
    }
})

//this file should be brought to main.js