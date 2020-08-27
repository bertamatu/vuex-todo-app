<template>
    <div>
        <h4>Todos</h4>
        <div class="todos">
            <div v-for="todo in allTodos" :key="todo.id" class="todo">
                {{todo.title}}
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'Todos',
    methods: {
        ...mapActions(["fetchTodos"]),
    },
    // COMPUTED - to define which getters to use
    computed: mapGetters(['allTodos']),
    created(){
        this.fetchTodos();
    }
};

</script>

<style scoped >
.todos {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
}
.todo {
    border: 1px white solid;
    border-radius: 5px;
    background: rgb(255, 163, 163);
    padding: 1rem;
    text-align: center;
    position: relative;
    cursor: pointer;
}
</style>