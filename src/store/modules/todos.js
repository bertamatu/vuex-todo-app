// here should be added: state, getters, actions, mutations

import axios from "axios"

const state = {
    todos: []
};

const getters = {
    allTodos: (state)=> state.todos
};

const actions = {
    //an action: makes a request, gets a response and calls a mutation
    async fetchTodos(){ // commit - to call the mutation
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data)
    }
};

const mutations ={};


export default {
    state,
    getters,
    actions,
    mutations
}


//this is a boilerplate for vuex module