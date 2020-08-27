<template>
    <div>
        <h3>Add Todo</h3>
        <div class="a">
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add todo...">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    name: "AddTodo",
    data(){
        return {
            title:''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(e){
            e.preventDefault();
            this.addTodo(this.title);
        }
    }
    
}
</script>

<style scoped>
form {
    display: flex;
}
input[type="text"] {
    flex:10;
    padding: 0.7rem;
    border: 1px solid lightgrey;
    border-radius: 5px;
    outline-color: lightgrey;
}
input[type="submit"]{
    flex:2;
    background: rgb(202, 234, 252);
    outline-color: lightgrey;
    border-radius: 5px;
    border: 1px solid lightgray;
    cursor: pointer;
}

</style>