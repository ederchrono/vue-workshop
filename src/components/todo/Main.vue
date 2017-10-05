<template>
  <div>

    <h3>Todo App</h3>

    <form v-on:submit.prevent="addTodo">
      <div class="input-group">
        <input
          v-model="newTodo"
          class="form-control"
          placeholder="Add todo.."
        >
        <span class="input-group-btn">
        <button class="btn btn-secondary">Add +</button>
      </span>
      </div>
    </form>

    <br>

    <h4>Pending todos</h4>
    <ul class="list-group">
      <li
        v-for="todo in pendingTodos"
        class="list-group-item"
      >
        {{ todo.description }} - {{ todo.done ? 'done' : 'nope' }}
        <button
          v-on:click="toggle(todo)"
          class="btn btn-sm btn-primary float-right">
          toggle!
        </button>
      </li>
    </ul>

    <br>

    <h4>Completed todos</h4>
    <ul class="list-group">
      <li
        v-for="todo in completedTodos"
        class="list-group-item"
      >
        {{ todo.description }} - {{ todo.done ? 'done' : 'nope' }}
        <button
          v-on:click="toggle(todo)"
          class="btn btn-sm btn-primary float-right">
          toggle!
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newTodo: '',

        todos: [
          { description: 'Grab a beer', done: true },
          { description: 'Deliver the workshop', done: false },
          { description: 'Learn VueJS', done: false }
        ]
      }
    },

    computed: {
      pendingTodos () {
        return this.todos.filter(todo => !todo.done)
      },

      completedTodos () {
        return this.todos.filter(todo => todo.done)
      }
    },

    methods: {
      toggle (todo) {
        todo.done = !todo.done
      },

      addTodo () {
        if (!this.newTodo) {
          return
        }
        this.todos.push({
          description: this.newTodo,
          done: false
        })
        this.newTodo = ''
      }
    }
  }
</script>

<style>

</style>
