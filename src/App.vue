<template>
  <div id="app">
    <div class="container">
      <AddTodo/>
      <FIlterTodos/>
         <Todos/>
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo"
import FIlterTodos from "./components/FilterTodos"

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FIlterTodos
  }
}
</script>

<style>
body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  background: rgb(238, 253, 255);
  font-size: 0.8rem;
}
.container {
  max-width:100vw;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
}
</style>
