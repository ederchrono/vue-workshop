<template>
  <form @submit.prevent="addTodo">
    <div class="input-group">
      <input
        v-model="newTodo"
        class="form-control"
        placeholder="Add todo..."
      >
      <span class="input-group-btn">
        <button class="btn btn-warning">Add +</button>
      </span>
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

        this.$emit('onAddTodo', this.newTodo)

        this.newTodo = ''
      }
    }
  }
</script>
