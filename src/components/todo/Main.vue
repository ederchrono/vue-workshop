<template>
  <div class="container">
    <br>

    <add-todo @addTodo="addTodo" />

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
  import AddTodo from './AddTodo'
  import Todo from './Todo'

  export default {
    data () {
      return {
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

      addTodo (newTodo) {
        if (!newTodo) {
          return
        }

        this.todos.push({
          description: newTodo,
          done: false
        })
      },

      toggle (todo) {
        todo.done = !todo.done
      }
    },

    components: {
      Todo,
      AddTodo
    }
  }
</script>
