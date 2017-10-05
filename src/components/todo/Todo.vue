<template>
  <li class="list-group-item">
    <button
      @click="remove"
      class="btn btn-sm btn-danger"
    >x
    </button>
    {{ description }} - {{ done ? 'done' : 'nope' }}
    <button
      @click="toggle"
      class="btn btn-sm btn-primary float-right">
      toggle!
    </button>
  </li>
</template>

<script>
  export default {
    props: ['description', 'done'],

    methods: {
      toggle () {
        this.$emit('onToggle')
      },

      remove () {
        this.$emit('onRemove')
      }
    }
  }
</script>

<style>

</style>
