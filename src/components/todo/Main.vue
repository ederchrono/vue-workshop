<template>
  <div class="container">
    <h2>Todo List</h2>
    <form @submit.prevent="addTodo">
      <div class="input-group">
        <input v-model="newTodo" class="form-control">
        <span class="input-group-btn">
          <button class="btn btn-secondary">Add todo</button>
        </span>
      </div>
    </form>

    <hr>
    <h4>Not done todos</h4>
    <ul class="list-group" v-if="pendingTodos.length">
      <task
        v-for="(todo, index) in pendingTodos"
        :todo="todo"
        :key="index"
        @onToggled="toggle(todo)"
      />
    </ul>
    <p v-else>There are no pending todos.</p>

    <hr>
    <h4>Done todos</h4>
    <ul class="list-group" v-if="completedTodos.length">
      <task
        v-for="(todo, index) in completedTodos"
        :todo="todo"
        :key="index"
        @onToggled="toggle(todo)"
      />
    </ul>
    <p v-else>There are no completed todos.</p>
  </div>
</template>

<script>
  import Task from './Task'

  export default {
    data () {
      return {
        newTodo: '',
        todos: [
          { description: 'Drink a beer', done: true },
          { description: 'Deliver the workshop', done: false },
          { description: 'Learn Vuex', done: false }
        ]
      }
    },

    computed: {
      completedTodos () {
        return this.todos.filter(todo => todo.done)
      },

      pendingTodos () {
        return this.todos.filter(todo => !todo.done)
      }
    },

    methods: {
      addTodo () {
        if (!this.newTodo) {
          return;
        }

        this.todos.push({
          description: this.newTodo,
          done: false
        })

        this.newTodo = ''
      },

      toggle (todo) {
        todo.done = !todo.done
      }
    },

    components: {
      Task
    }
  }
</script>
