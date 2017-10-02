<template>
  <li class="list-group-item">
    <span :class="{ 'task-done' : todo.done }">{{ todo.description }}</span>
    <button
      class="btn btn-sm btn-primary"
      @click.prevent="toggle"
    >toggle
    </button>
  </li>
</template>

<script>
  export default {
    props: ['todo'],

    methods: {
      toggle () {
        this.$emit('onToggled')
      }
    }
  }
</script>

<style>
  .task-done {
    text-decoration: line-through;
  }
</style>
