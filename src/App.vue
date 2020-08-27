<template>
  <div id="app">
    <div class="container">
         <Todos/>
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos"

export default {
  name: 'App',
  components: {
    Todos
  }
}
</script>

<style>
body{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: rgb(238, 253, 255);
}
.container {
  max-width:100vw;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  border-radius: 5px;
}
</style>
