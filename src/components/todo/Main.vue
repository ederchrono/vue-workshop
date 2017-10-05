<template>
  <div class="container">
    <br>
    <h3>Todo App</h3>

    <form @submit.prevent="addTodo">
      <div class="input-group">
        <input
          v-model="newTodo"
          class="form-control"
          placeholder="Add todo.."
        >
        <span class="input-group-btn">
        <button class="btn btn-warning">Add +</button>
      </span>
      </div>
    </form>

    <br>

    <h4>Pending todos</h4>
    <ul class="list-group">
      <todo v-for="todo in pendingTodos"
            :description="todo.description"
            :done="todo.done"
            @onToggle="togglePending(todo)"
      />
    </ul>

    <br>

    <h4>Completed todos</h4>
    <ul class="list-group">
      <todo v-for="todo in completedTodos"
            :description="todo.description"
            :done="todo.done"
            @onToggle="toggleCompleted(todo)"
      />
    </ul>

  </div>
</template>

<script>
  import Todo from './Todo'

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
      togglePending (todo) {
        console.log('pending')
        todo.done = !todo.done
      },
      toggleCompleted (todo) {
        console.log('completed')
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
    },

    components: {
      Todo
    }
  }
</script>

<style>

</style>
