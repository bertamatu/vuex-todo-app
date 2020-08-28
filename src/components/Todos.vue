<template>
    <div>
        <h4>Todos</h4>
        <div class="legend">
            <span>Click to mark as complete</span>
            <span>
                <span class="incomplete-box"> = Incomplete</span>
            </span>
            <span>
                <span class="complete-box"> = Complete</span>
            </span>
        </div>

        <div class="todos">
            <div 
            @click="onDblClick(todo)" 
            v-for="todo in allTodos" 
            :key="todo.id" 
            class="todo" 
            v-bind:class="{'is-complete':todo.completed}">
            {{todo.title}}
            <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'Todos',
    methods: {
        ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
        onDblClick(todo) {
            const updTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }
            this.updateTodo(updTodo);
        }
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
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}
.todo {
    border: 1px white solid;
    border-radius: 5px;
    background: rgb(236, 191, 193);
    padding: 1rem;
    text-align: center;
    position: relative;
    cursor: pointer;
    font-size: 0.6rem;
}
i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: rgb(255, 255, 255);
    cursor: pointer;
}
.legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}
.complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: rgb(148, 252, 200);
}
.incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: rgb(255, 123, 119);
}

.is-complete {
    background: rgb(144, 233, 144);
}
@media (max-width: 500px) {
    .todos {
        grid-template-columns: 1fr;
    }
}
</style>