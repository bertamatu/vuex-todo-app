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
    async fetchTodos({commit}){ // commit - to call the mutation
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos', response.data)
    },
    async addTodo({commit}, title){
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false});
        commit('newTodo', response.data);
    },
    async deleteTodo({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },
    async filterTodos({commit}, e){
        //Get selected number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos', response.data);
    }
};

const mutations = { 
    setTodos: (state, todos)=> (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
};

export default {
    state,
    getters,
    actions,
    mutations
}


//this is a boilerplate for vuex module