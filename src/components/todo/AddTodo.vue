<template>
  <form @submit.prevent="addTodo">
    <div class="input-group">
      <input v-model="newTodo" class="form-control" placeholder="What are you doing...">
      <div class="input-group-btn">
        <button class="btn btn-warning">Go!</button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        newTodo: ''
      }
    },

    methods: {
      addTodo () {
        if (!this.newTodo) {
          return
        }

        this.$emit('addTodo', this.newTodo)

        this.newTodo = ''
      }
    }
  }
</script>
