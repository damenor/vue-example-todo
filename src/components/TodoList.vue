<template>
  <div class="todo-list">
    <TodoItem 
      v-for="todo in todoslist" 
      v-bind:key="todo.id" 
      v-bind:todo="todo"
      v-on:todo-delete="$emit('todo-delete', todo.id)">
    </TodoItem> 
    <div class="todo-list__empty" v-if="todoslist.length === 0">
      <h3>{{ textEmptyHeader }}</h3>
      <span>&#128558;</span>
      <p>{{ textEmptyCreateNew }}</p>
    </div>
  </div>
</template>

<script>

  import TodoItem from './TodoItem.vue'

  export default {
    name: 'TodoList',
    components: {
      TodoItem
    },
    props: [
      'todoslist'
    ],
    data() {
      return {
        textEmptyHeader: 'ups!!!',
        textEmptyCreateNew: 'there seems to be no homework, create a new one'
      }
    }
  }

</script>

<style scoped>

  .todo-list {
    position:relative;
    max-width: 850px;
    max-height: calc(100vh - 226px);
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 12px;
    padding-bottom: 0;
    overflow-y: scroll;
    box-shadow: var(--shadow-dark-inset);
  }

  .todo-list__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px;
    padding-top: 32px;
    text-transform: uppercase;
  }

  .todo-list__empty h3 {
    color: var(--color-danger);
    font-size: 90px;
    font-family: 'Bangers', cursive;
    letter-spacing: 2px;
  }

  .todo-list__empty span {
    font-size: 120px;
  }

  .todo-list__empty p {
    padding-top: 16px;
    color: var(--color-light);
    font-size: 24px;
  }

</style>