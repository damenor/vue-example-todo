<template>
  <div class="todo-add">
    <form @submit="onSubmit">
      <input type="text" v-model="title" v-bind:placeholder="placehoder"/>
      <button>ADD</button>
    </form>
  </div>
</template>

<script>

  import { uuid } from 'vue-uuid'

  export default {
    name: 'TodoAdd',
    methods: {
      onSubmit(e) {

        e.preventDefault()

        if(this.title.length > 0) {
          const newTodo = {
            id: uuid.v4(),
            title: this.title,
            completed: false
          }

          this.title = ''
          this.$emit('todo-add', newTodo)
        }

      }
    },
    data() {
      return { title: '', placehoder: 'add new todo' }
    }
  }

</script>

<style scoped>

  .todo-add {
    max-width: 850px;
    margin: 0 auto;
    margin-bottom: 16px;
  }

  .todo-add form {
    display: flex;
  }

  .todo-add input {
    width: 100%;
    padding: 8px;
    box-shadow: var(--shadow-dark-inset);
  }

  .todo-add button {
    padding: 0 16px;
    border-radius: none;
  }

  .todo-add input {
    color: var(--color-light);
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    border: none;
    background-color: var(--color-dark);
  }


</style>