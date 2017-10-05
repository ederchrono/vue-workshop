<template>
  <div class="container">
    <br>
    <h3>Todo App</h3>

    <add-todo @onAddTodo="addTodo" />

    <br>

    <h4>Pending todos</h4>
    <ul class="list-group">
      <todo v-for="todo in pendingTodos"
            :description="todo.description"
            :done="todo.done"
            @onToggle="togglePending(todo)"
            @onRemove="remove(todo)"
      />
    </ul>

    <br>

    <h4>Completed todos</h4>
    <ul class="list-group">
      <todo v-for="todo in completedTodos"
            :description="todo.description"
            :done="todo.done"
            @onToggle="toggleCompleted(todo)"
            @onRemove="remove(todo)"
      />
    </ul>

  </div>
</template>

<script>
  import Todo from './Todo'
  import AddTodo from './AddTodo'

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

      addTodo (newTodo) {
        this.todos.push({
          description: newTodo,
          done: false
        })
      },

      remove (todo) {
        this.todos.splice(this.todos.indexOf(todo), 1)
      }
    },

    components: {
      Todo,
      AddTodo
    }
  }
</script>

<style>

</style>
