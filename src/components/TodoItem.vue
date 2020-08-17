<template>
  <div class="todo-item">
    <div class="todo-item__body" v-on:click="toggleCompleted">
      <div class="todo-item__checkbox" v-bind:class="{['todo-item__checkbox--checked']: todo.completed}">
        {{ todo.completed ? '&#128541;' : '&#128554;' }}
      </div>
      <p class="todo-item__title" v-bind:class="{['todo-item__title--completed']: todo.completed}">{{ todo.title }}</p>
    </div>
    <div class="todo-item__actions">
      <button @click="$emit('todo-delete', todo.id)">{{ textButton }}</button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'TodoItem',
    props: ['todo'],
    methods: {
      toggleCompleted() {
        // eslint-disable-next-line vue/no-mutating-props
        this.todo.completed = !this.todo.completed
      }
    },
    data() {
      return { textButton: 'borrar' }
    }
  }

</script>

<style scoped>

  .todo-item {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 8px;
    padding: 8px;
    color: var(--color-light);
    border-radius: 4px;
    background-color: var(--color-dark);
    box-shadow: var(--shadow-dark);
  }

  .todo-item__body {
    flex: 1;
    cursor: pointer;
  }

  .todo-item__checkbox {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-radius: 50%;
    box-shadow: var(--shadow-dark);
  }

  .todo-item__checkbox--checked {
    box-shadow: var(--shadow-dark-inset);
  }

  .todo-item__title {
    flex: 1;
    margin: 0 16px;
    text-transform: uppercase;
  }

  .todo-item__title--completed {
    color: var(--color-grey);
    text-decoration: line-through;
  }

  .todo-item, 
  .todo-item__body,
  .todo-item__actions {
    display: flex;
    align-items: center;
  }

</style>