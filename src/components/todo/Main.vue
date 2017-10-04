<template>
  <div class="container">
    <br>
    <form @submit.prevent="addTodo">
      <div class="input-group">
        <input v-model="newTodo" class="form-control" placeholder="What are you doing...">
        <div class="input-group-btn">
          <button class="btn btn-warning">Go!</button>
        </div>
      </div>
    </form>

    <br>

    <h4>Pending todos</h4>
    <ul class="list-group">
      <todo v-for="(todo, index) in pendingTodos"
            v-bind="todo"
            :key="index"
            @onToggled="togglePending(todo)"
            @onRemoved="remove(todo)"
      />
    </ul>

    <br>
    <h4>Completed todos</h4>
    <ul class="list-group">
      <todo v-for="(todo, index) in completedTodos"
            v-bind="todo"
            :key="index"
            @onToggled="toggleCompleted(todo)"
            @onRemoved="remove(todo)"
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
          { description: 'Drink a beer', done: true },
          { description: 'Learn VueJS', done: false },
          { description: 'Deliver the Workshop', done: false }
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
      remove (todo) {
        this.todos.splice(this.todos.indexOf(todo), 1)
      },

      togglePending (todo) {
        console.log('togled pending')
        todo.done = !todo.done
      },

      toggleCompleted (todo) {
        console.log('togled completed')
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
      },

      toggle (todo) {
        todo.done = !todo.done
      }
    },

    components: {
      Todo
    }
  }
</script>
