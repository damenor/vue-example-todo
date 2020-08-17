<template>
  <div>
    <header id="header">
      <h1>{{ titleApp }}</h1>
      <TodoSearch v-on:todo-search="todoSearch"></TodoSearch>
    </header>
    <main id="main-container">
      <TodoAdd v-on:todo-add="todoAdd"></TodoAdd>
      <TodoList v-bind:todoslist="todosCopy" v-on:todo-delete="todoDelete"></TodoList>
    </main>
  </div>
</template>

<script>

  import TodoSearch from './components/TodoSearch.vue'
  import TodoAdd from './components/TodoAdd.vue'
  import TodoList from './components/TodoList.vue'

  import { KEY_ITEMS_LOCALSTORAGE } from './constants/localstorage.js'
  import { getLocalStorage, setLocalStorage } from './helpers/localstorage.js'

  export default {
    name: 'App',
    components: {
      TodoSearch,
      TodoAdd,
      TodoList
    },
    methods: {
      todoAdd(newTodo) {
        this.todos = [...this.todos, newTodo]
        this.setTodosCopy()
        setLocalStorage(KEY_ITEMS_LOCALSTORAGE, this.todos)
      },
      todoDelete(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
        this.setTodosCopy()
        setLocalStorage(KEY_ITEMS_LOCALSTORAGE, this.todos)
      },
      todoSearch(query) {
        console.log('QUERY', query)
        if(query.trim() === '') {
          this.setTodosCopy()
        } else {
          const temp = this.todos.filter(todo => todo.title.includes(query))
          this.setTodosCopy(temp)
        }
      },
      setTodosCopy(newTodos = this.todos) {
        this.todosCopy = [...newTodos]
      }
    },
    data() {
      return {
        titleApp: 'TODO VUE',
        todos: [],
        todosCopy: []
      }
    },
    created() {
      const todos = getLocalStorage(KEY_ITEMS_LOCALSTORAGE)
      if(todos && todos.length > 0) this.todos = todos
      this.todosCopy = [...this.todos]
    } 
  }

</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat&display=swap');

  :root {
    --color-dark: #2d2d2d;
    --color-grey: #999;
    --color-light: #f7f7f7;
    --color-primary: #41B883;
    --color-danger: #eb4d4b;
    --shadow-upper-dark: -2px -2px 2px rgba(255, 255, 255, 0.05);
    --shadow-lower-dark: 2px 2px 2px rgba(0, 0, 0, 0.65);
    --shadow-dark: var(--shadow-upper-dark), var(--shadow-lower-dark);
    --shadow-dark-inset: inset var(--shadow-upper-dark), inset var(--shadow-lower-dark);
    --shadow-dark-inset-border: var(--shadow-upper-dark), inset var(--shadow-upper-dark), var(--shadow-lower-dark), inset var(--shadow-lower-dark);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  *:focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #666; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #666; 
  }

  body {
    width: 100%;
    height: 100vh;
    overflow: hidden; 
    background-color: var(--color-dark);
  }

  button {
    padding: 8px;
    color: var(--color-light);
    text-transform: uppercase;
    border: none;
    background-color: transparent;
    box-shadow: var(--shadow-dark);
    cursor: pointer;
  }

  button:active {
    box-shadow: var(--shadow-dark-inset);
  }

  #header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #header h1 {
    margin: 16px 0;
    color: var(--color-primary);
    font-size: 64px;
    font-family: 'Bangers', cursive;
  }

  #main-container {
    padding: 16px;
  }

</style>
