<template>
  <div class="todo-search">
    <input 
      type="text" 
      v-bind:placeholder="placeholder"
      v-model="query" 
      @change="$emit('todo-search', query)"/>
  </div>
</template>

<script>

  export default {
    name: 'TodoSearch',
    data() {
      return { query: '', placeholder: 'Search...' }
    } 
  }

</script>

<style scoped>

  .todo-search {
    display: flex;
    width: 100%;
  }

  .todo-search input {
    width: 100%;
    border: none;
    padding: 8px 16px;
    color: var(--color-light);
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
    background-color: var(--color-dark);
    box-shadow:  var(--shadow-dark-inset);
  }

  .todo-search input:placeholder {
    color: var(--color-primary);
  }

</style>